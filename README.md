# Mauscons Figma plugin

TBA.

## Local development

1. Clone the repository

   ```shell
   git clone https://github.com/RasmusNielsen/figma-mauscons.git
   cd figma-mauscons
   ```

1. Install the dependencies

   ```shell
   npm install
   ```

1. Build the plugin

   ```
   npm run watch
   ```

1. Open the [Figma desktop app](https://www.figma.com/downloads/)

1. Go to `Menu > Plugins > Development > New Plugin...`

1. Choose `figma-mauscons/manifest.json`

1. Run the plugin by going to `Menu > Plugins > Development > Mauscons`

1. Convert new SVG to JSON `cd icons && sh to-json.sh`
