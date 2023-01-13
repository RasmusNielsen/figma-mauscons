import loadIcons from './icons'

figma.showUI(__html__, { width: 300, height: 400 })

figma.ui.onmessage = message => {
  const icon = figma.createNodeFromSvg(loadIcons().find(icon => icon.name == message.type)?.toSvg() ?? "")
  icon.name = message.type
  icon.x = figma.viewport.center.x
  icon.y = figma.viewport.center.y
  figma.currentPage.selection = [icon]
}
