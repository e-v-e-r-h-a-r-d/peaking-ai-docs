# guardar-screenshot.ps1
# Guarda el screenshot que tienes en el clipboard dentro de la carpeta correcta.
# Uso: .\guardar-screenshot.ps1 -seccion "01-primeros-pasos" -nombre "configuracion-team"

param(
    [Parameter(Mandatory=$true)]
    [string]$seccion,   # Ej: "01-primeros-pasos", "02-canales", etc.

    [Parameter(Mandatory=$true)]
    [string]$nombre     # Ej: "panel-team", "boton-invitar", etc.
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

$archivo = Join-Path $carpeta "$nombre.png"
$img.Save($archivo, [System.Drawing.Imaging.ImageFormat]::Png)

Write-Host "Screenshot guardado en:" -ForegroundColor Green
Write-Host "  $archivo" -ForegroundColor Cyan
Write-Host ""
Write-Host "URL para el markdown:" -ForegroundColor Green
Write-Host "  https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots/$seccion/$nombre.png" -ForegroundColor Cyan
