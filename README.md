# ELISA B. – statische Website

Originalgetreue statische Sicherung der öffentlich verlinkten Seiten von https://elisamusic.org/, Stand 18. September 2026.

## Seiten

- `/` und `/HOME/`
- `/TERMINE/`
- `/PROJEKTE/`
- `/KONTAKT/`
- `/KONTAKT/Impressum/`

Die Sitemap des Originals führt dieselben fünf Hauptseiten auf. Texte, Navigation, Bilder, Gestaltung und Projektvideo wurden übernommen. Alle internen Links sind relativ, sodass die Seite auch unter einem GitHub-Pages-Projektpfad funktioniert. Kein Build und keine Installation sind notwendig. `.nojekyll` verhindert eine Verarbeitung durch Jekyll.

## Bewusste Anpassungen

- Stylesheets, Schriftarten und Bilder liegen lokal. Die Original-Template-Skripte für Navigation und Gestaltung bleiben erhalten; Baukasten-Serverfunktionen und Tracking wurden entfernt.
- Ein defektes `https://https://` in einem YouTube-Link wurde korrigiert.
- Das Spotify-Fenster wird mit einem zugänglichen Dialog geöffnet. Spotify und YouTube bleiben externe Dienste.
- Das Kontaktformular kann auf GitHub Pages keine Nachrichten versenden. Die originalen Felder sind als nicht sendbare Kopie erhalten, mit einem sichtbaren Link zum aktiven Originalformular. Es werden keine Nachrichten vorgetäuscht oder übertragen.
- Das große Projektvideo wird für die Veröffentlichung komprimiert; die unveränderte Originaldatei ist in der separaten lokalen Sicherung enthalten.

## Veröffentlichung

GitHub Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

## Herkunft und Rechte

`capture-manifest.json` dokumentiert Quell-URLs, Originalgrößen und SHA-256-Prüfsummen. Inhalte und Gestaltung bleiben Eigentum der jeweiligen Rechteinhaber; es wird keine neue Lizenz dafür vergeben.
