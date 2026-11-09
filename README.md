# Chengyu Wan — Portfolio

A lightweight, responsive static portfolio: HTML, CSS and vanilla JavaScript, with no dependencies, external fonts, analytics, backend or contact-data collection. GitHub Pages serves the repository root.

## Local preview

```sh
python3 -m http.server 8090 --bind 127.0.0.1
```

Open http://127.0.0.1:8090 . Use a local server rather than opening index.html directly because project metadata is fetched from `projects.json`.

## Content and evidence

Six project summaries were checked against existing local code/records. Public GitHub URLs were verified for Stardew Valley Analytics Lab, Hotel Supply Analytics and Strategy Pulse. ScreeningFlow Lite, Feng Shui Lab's four-room version and Lucky Color Wardrobe are local implementations; their source is not published by this website.

An older Feng Shui Lab demo is recorded historically, but current access verification returned HTTP 403. No demo button is invented or marked verified. Other projects have no confirmed hosted application. GitHub repository links are source links, not live demos. Project status and contribution limits remain visible in each card's details.

Screenshots are actual application views, not generated mockups. Browser chrome was cropped out, images resized/compressed, and image metadata stripped. Stardew screenshots show the synthetic public fixture mode only. Hotel Supply uses public historical data: Antonio, N.; de Almeida, A.; Nunes, L. (2019), “Hotel booking demand datasets”, Data in Brief 22, 41–49, https://doi.org/10.1016/j.dib.2018.11.126, CC BY 4.0: https://creativecommons.org/licenses/by/4.0/ . Derived visualization and synthetic group labels are disclosed in the project. Lucky Color Wardrobe's screenshot shows its labeled schematic mock workflow, not paid AI imagery. Local prototype screenshots do not imply deployed apps or publicly released source.

The site distinguishes owner direction, requirements, review and confirmed acceptance from Codex implementation/testing. Lucky Color Wardrobe's individual contribution record remains incomplete and is explicitly labeled. Skill terms refer to either recorded work experience or AI-assisted project technologies, not professional proficiency in every listed stack.

## Privacy and release boundary

Only website files, public professional email, reviewed project descriptions and sanitized screenshots are published. No phone number, home address, CV, career profile, raw game saves, private datasets, credentials or absolute local paths are included. Existing projects and CVs are unchanged.

## Maintenance

Edit `projects.json` for project descriptions/status. Screenshots live in `assets/`. Update demo links only after verifying the actual hosted version. Filters progressively update six cards; no invented metrics or deployments are added. Screenshot dialog supports Escape and keyboard focus through the browser's native dialog behavior. CSS respects reduced motion.
