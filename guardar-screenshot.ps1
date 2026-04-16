# guardar-screenshot.ps1
# Guarda el screenshot que tienes en el clipboard dentro de la carpeta correcta.
# Por defecto comprime a JPEG 85% y redimensiona si supera el ancho máximo.
#
# Uso básico:
#   .\guardar-screenshot.ps1 -seccion "01-primeros-pasos" -nombre "configuracion-team"
#
# Con calidad personalizada (0-100):
#   .\guardar-screenshot.ps1 -seccion "06-crm-audiencias" -nombre "crm-kanban" -calidad 90
#
# Forzar PNG sin compresión:
#   .\guardar-screenshot.ps1 -seccion "06-crm-audiencias" -nombre "crm-kanban" -png

param(
    [Parameter(Mandatory=$true)]
    [string]$seccion,      # Ej: "01-primeros-pasos", "06-crm-audiencias", etc.

    [Parameter(Mandatory=$true)]
    [string]$nombre,       # Ej: "panel-kanban", "detalle-oportunidad", etc.

    [int]$calidad = 85,    # Calidad JPEG (0-100). 85 produce archivos ~300KB-1MB.

    [int]$maxAncho = 1440, # Si la imagen supera este ancho, se redimensiona proporcionalmente.

    [switch]$png           # Usa este flag para guardar como PNG sin compresión.
)

Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

$img = [System.Windows.Forms.Clipboard]::GetImage()

if ($null -eq $img) {
    Write-Host "ERROR: No hay ninguna imagen en el clipboard. Toma el screenshot primero (Win+Shift+S) y luego corre este script." -ForegroundColor Red
    exit 1
}

$carpeta = Join-Path $PSScriptRoot "screenshots\$seccion"
if (-not (Test-Path $carpeta)) {
    New-Item -ItemType Directory -Path $carpeta | Out-Null
    Write-Host "Carpeta creada: $carpeta" -ForegroundColor Yellow
}

# Redimensionar si el ancho supera el máximo
$imgFinal = $img
if ($img.Width -gt $maxAncho) {
    $ratio     = $maxAncho / $img.Width
    $nuevoAlto = [int]($img.Height * $ratio)
    $resized   = New-Object System.Drawing.Bitmap($maxAncho, $nuevoAlto)
    $g         = [System.Drawing.Graphics]::FromImage($resized)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($img, 0, 0, $maxAncho, $nuevoAlto)
    $g.Dispose()
    $imgFinal = $resized
    Write-Host "Imagen redimensionada de $($img.Width)x$($img.Height) a $($maxAncho)x$($nuevoAlto)" -ForegroundColor Yellow
}

if ($png) {
    # Guardar como PNG (sin compresión — puede ser grande)
    $archivo = Join-Path $carpeta "$nombre.png"
    $imgFinal.Save($archivo, [System.Drawing.Imaging.ImageFormat]::Png)
    $ext = "png"
} else {
    # Guardar como JPEG con calidad configurable
    $archivo  = Join-Path $carpeta "$nombre.jpg"
    $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
                  Where-Object { $_.MimeType -eq 'image/jpeg' }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
        [System.Drawing.Imaging.Encoder]::Quality, [long]$calidad
    )
    $imgFinal.Save($archivo, $jpegCodec, $encoderParams)
    $ext = "jpg"
}

$imgFinal.Dispose()
if ($imgFinal -ne $img) { $img.Dispose() }

$tamano = [math]::Round((Get-Item $archivo).Length / 1KB)
Write-Host ""
Write-Host "Screenshot guardado ($tamano KB):" -ForegroundColor Green
Write-Host "  $archivo" -ForegroundColor Cyan
Write-Host ""
Write-Host "URL para el markdown:" -ForegroundColor Green
Write-Host "  https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots/$seccion/$nombre.$ext" -ForegroundColor Cyan
