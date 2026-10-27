# Comprova el nombre de pàgines dels PDF i en renderitza PNG (PyMuPDF si hi és; si no, pypdf + pdftoppm).
import sys, subprocess
try:
    import fitz
    def count(p): return len(fitz.open(p))
except ImportError:
    from pypdf import PdfReader
    def count(p): return len(PdfReader(p).pages)
out = sys.argv[1] if len(sys.argv) > 1 else "screens"
for lang in ("ca", "en"):
    pdf = f"public/downloads/sistema-{lang}.pdf"
    n = count(pdf)
    print(lang, "pages:", n)
    subprocess.run(["pdftoppm", "-r", "80", "-png", pdf, f"{out}/pdf-{lang}"], check=True)
