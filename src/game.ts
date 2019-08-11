import {FactsModule} from "./planet_facts"

/**
 * CREATE 3D OBJECT
 * */

const menu3D = new Entity()

const sunMenu = new Entity()
sunMenu.addComponent(new BoxShape())
sunMenu.addComponent(new Transform({
    position: new Vector3(8, 1.5, 8),
    scale: new Vector3(0.1, 0.25, 0.5)
}))
sunMenu.addComponent(
    new OnClick(e => {
        log("sun CLICKED")
        stateDynamicUI(true, false, true)
        stateInfoUI.changeCurrentUI(staticScreenGroup.sun)
    })
)

const mercuryMenu = new Entity()
mercuryMenu.addComponent(new BoxShape())
mercuryMenu.addComponent(new Transform({
    position: new Vector3(8, 1.2, 8),
    scale: new Vector3(0.1, 0.25, 0.5)
}))
mercuryMenu.addComponent(
    new OnClick(e => {
        log("mercury CLICKED")
        stateDynamicUI(true, false, true)
        stateInfoUI.changeCurrentUI(staticScreenGroup.mercury)
    })
)

const disclaimerMenu = new Entity()
disclaimerMenu.addComponent(new BoxShape())    
disclaimerMenu.addComponent(new Transform({
    position: new Vector3(8, 0.9, 8),
    scale: new Vector3(0.1, 0.25, 0.5)
}))
disclaimerMenu.addComponent(
    new OnClick(e => {
        log("disclaimer CLICKED")
        stateDynamicUI(false, true, true)
        stateInfoUI.changeCurrentUI(staticScreenGroup.disclaimer1)
    })
)

sunMenu.setParent(menu3D)
mercuryMenu.setParent(menu3D)
disclaimerMenu.setParent(menu3D)
engine.addEntity(menu3D)


/**
 * CREATE CANVAS FOR UI
 * */

const canvas = new UICanvas()
// create container inside canvas
const rect = new UIContainerRect(canvas)
rect.adaptHeight = true
rect.adaptWidth = true
rect.hAlign = 'left'
rect.vAlign = 'top'
rect.opacity = 0.8

canvas.visible = false


/**
 * CREATE STATIC SCREEN (UIImage)
 * */

// sun information screen
let sunUITexture = new Texture("images/UI/UI_sun.jpg")
const sunImgScreen = new UIImage(rect, sunUITexture)
sunImgScreen.name = "sun_screen"
sunImgScreen.hAlign = 'left'
sunImgScreen.vAlign = 'top'
sunImgScreen.sourceLeft = 0
sunImgScreen.sourceTop = 0
sunImgScreen.sourceWidth = 1024
sunImgScreen.sourceHeight = 483
sunImgScreen.width = 1024
sunImgScreen.height = 512
sunImgScreen.visible = false

// mercury information screen
let merUITexture = new Texture("images/UI/UI_mercury.jpg")
const merImgScreen = new UIImage(rect, merUITexture)
merImgScreen.name = "mercury_screen"
merImgScreen.hAlign = 'left'
merImgScreen.vAlign = 'top'
merImgScreen.sourceLeft = 0
merImgScreen.sourceTop = 0
merImgScreen.sourceWidth = 1024
merImgScreen.sourceHeight = 483
merImgScreen.width = 1024
merImgScreen.height = 512
merImgScreen.visible = false

// disclaimer information screen 1
let disclaimer = new Texture("images/UI/UI_disclaimer1.jpg")
const discImgScreen1 = new UIImage(rect, disclaimer)
discImgScreen1.name = "disclaimer1_screen"
discImgScreen1.hAlign = 'left'
discImgScreen1.vAlign = 'top'
discImgScreen1.sourceLeft = 0
discImgScreen1.sourceTop = 0
discImgScreen1.sourceWidth = 1024
discImgScreen1.sourceHeight = 483
discImgScreen1.width = 1024
discImgScreen1.height = 512
discImgScreen1.visible = false

// disclaimer information screen 2
disclaimer = new Texture("images/UI/UI_disclaimer2.jpg")
const discImgScreen2 = new UIImage(rect, disclaimer)
discImgScreen2.name = "disclaimer2_screen"
discImgScreen2.hAlign = 'left'
discImgScreen2.vAlign = 'top'
discImgScreen2.sourceLeft = 0
discImgScreen2.sourceTop = 0
discImgScreen2.sourceWidth = 1024
discImgScreen2.sourceHeight = 483
discImgScreen2.width = 1024
discImgScreen2.height = 512
discImgScreen2.visible = false


/**
 * CREATE DYNAMIC SCREEN (UIImage)
 * */

// close button screen
let imgCloseBtn = new Texture("images/UI/close.png")
const closeBtn = new UIImage(rect, imgCloseBtn)
closeBtn.name = 'close_btn'
closeBtn.width = '50px'
closeBtn.height = '50px'
closeBtn.sourceWidth = 112
closeBtn.sourceHeight = 112
closeBtn.positionX = 953
closeBtn.positionY = -5
closeBtn.isPointerBlocker = true
closeBtn.onClick = new OnClick(() => {
    log("Close Button Clicked")
    stateDynamicUI(false, false, false)
    stateInfoUI.getCurrentUI().visible = false
    canvas.visible = false
})

// fact button screen
let imgFactBtn = new Texture("images/UI/facts.png")
export let factBtn = new UIImage(rect, imgFactBtn)
factBtn.name = 'fact_btn'
factBtn.width = '203px'
factBtn.height = '81px'
factBtn.sourceWidth = 512
factBtn.sourceHeight = 226
factBtn.positionX = 755
factBtn.positionY = -135
factBtn.isPointerBlocker = true
factBtn.onClick = new OnClick(() => {
    log("Fact Button Clicked")
    let factStr = FactsModule.setFact(stateInfoUI.getCurrentUI())
    planetMenuGroup.factTxt.value = factStr
})

// compare button screen
let imgCompareBtn = new Texture("images/UI/compare.png")
export let compareBtn = new UIImage(rect, imgCompareBtn)
compareBtn.name = 'compare_btn'
compareBtn.width = '167px'
compareBtn.height = '156px'
compareBtn.sourceWidth = 512
compareBtn.sourceHeight = 512
compareBtn.positionX = 780
compareBtn.positionY = -250
compareBtn.isPointerBlocker = true
compareBtn.onClick = new OnClick(() => {
    log("Compare Button Clicked")
})

// artscape button screen
let imgArtscapeBtn = new Texture("images/UI/artscape.png")
let artscapeBtn = new UIImage(rect, imgArtscapeBtn)
artscapeBtn.name = 'artscape_btn'
artscapeBtn.width = '167px'
artscapeBtn.height = '156px'
artscapeBtn.sourceWidth = 500
artscapeBtn.sourceHeight = 500
artscapeBtn.positionX = 780
artscapeBtn.positionY = -400
artscapeBtn.isPointerBlocker = true
artscapeBtn.onClick = new OnClick(() => {
    log("Landscape Button Clicked")
})

// next button screen
let imgNextBtn = new Texture("images/UI/next.png")
let nextBtn = new UIImage(rect, imgNextBtn)
nextBtn.name = 'next_btn'
nextBtn.width = '50px'
nextBtn.height = '50px'
nextBtn.sourceWidth = 112
nextBtn.sourceHeight = 112
nextBtn.positionX = 100
nextBtn.positionY = -5
nextBtn.isPointerBlocker = true
nextBtn.onClick = new OnClick(() => {
    log("Next Button Clicked")
    log(stateInfoUI.getCurrentUI().name)
    if (stateInfoUI.getCurrentUI().name == 'disclaimer1_screen') {
        stateInfoUI.changeCurrentUI(staticScreenGroup.disclaimer2)
    }
    else {
        stateInfoUI.changeCurrentUI(staticScreenGroup.disclaimer1)
    }
})

/**
 * CREATE DYNAMIC SCREEN (UIText)
 * */

// UI text for planet facts
const factTxt = new UIText(rect)
factTxt.outlineColor = new Color4(0.7, 1, 0.8, 1)
factTxt.value = 'WELCOME'
factTxt.fontSize = 22
factTxt.width = 500
factTxt.height = 205
factTxt.positionX = 455
factTxt.positionY = 0
factTxt.color = new Color4(0.7, 1, 0.8, 1)
factTxt.textWrapping = true

/**
 * GROUPING UIImage OBJECTS BASED ON FUNCTIONALITY
 * */

// STATIC SCREEN
// information page group
const staticScreenGroup = {
    "sun": sunImgScreen,
    "mercury": merImgScreen,
    "disclaimer1": discImgScreen1,
    "disclaimer2": discImgScreen2
}

// DYNAMIC SCREEN
// close button -> appear in all page
const closeMenuGroup = {
    "closeBtn": closeBtn
}
// next button -> appear in disclaimer page
const disclaimerMenuGroup = {
    "nextBtn": nextBtn
}
// (fact, compare & artscape button) & (planet fact text) -> appear in planet info page
const planetMenuGroup = {
    "factBtn": factBtn,
    "compareBtn": compareBtn,
    "artscapeBtn": artscapeBtn,
    "factTxt": factTxt
}


/**
 * FUNCTION TO CHANGE USER SCREEN
 * */

// control STATIC SCREEN
// function expression to change static screen (sun, mercury and disclaimer page information)
const stateInfoUI = (function () {
    let UI_show: UIImage
    return {
        changeCurrentUI: function (ui_screen) {
            if (UI_show) {
                UI_show.visible = false
                log("current UI set to false")
            }
            UI_show = ui_screen
            UI_show.visible = true
            //text_UI.value = 'HI !!!'
            canvas.visible = true
        },
        getCurrentUI: function () {
            return UI_show
        }
    }
}())

// control DYNAMIC SCREEN
// function to change button screen (close, next, fact, compare and artscape button)
// and also text screen (planet facts screen)
function stateDynamicUI(bPlanetMenu: boolean, bDisclaimerMenu: boolean, bCloseMenu: boolean) {
    for (let key in planetMenuGroup) {
        planetMenuGroup[key].visible = bPlanetMenu
    }
    for (let key in disclaimerMenuGroup) {
        disclaimerMenuGroup[key].visible = bDisclaimerMenu
    }
    for (let key in closeMenuGroup) {
        closeMenuGroup[key].visible = bCloseMenu
    }
}
