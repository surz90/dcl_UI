let menu3D = new Entity()

let sunMenu = new Entity()
//sunMenu.addComponent(new GLTFShape("models/text/sunMenu.gltf"))
sunMenu.addComponent(new BoxShape())
sunMenu.addComponent(new Transform({
    position: new Vector3(8, 1.5, 8),
    scale: new Vector3(0.1, 0.25, 0.5)
}))
sunMenu.setParent(menu3D)

let mercuryMenu = new Entity()
//mercuryMenu.addComponent(new GLTFShape("models/text/mercuryMenu.gltf"))
mercuryMenu.addComponent(new BoxShape())
mercuryMenu.addComponent(new Transform({
    position: new Vector3(8, 1.2, 8),
    scale: new Vector3(0.1, 0.25, 0.5)
}))
mercuryMenu.setParent(menu3D)
let disclaimerMenu = new Entity()
//disclaimerMenu.addComponent(new GLTFShape("models/text/disclaimerMenu.gltf"))
disclaimerMenu.addComponent(new BoxShape())    
disclaimerMenu.addComponent(new Transform({
    position: new Vector3(8, 0.9, 8),
    scale: new Vector3(0.1, 0.25, 0.5)
}))
disclaimerMenu.setParent(menu3D)

// add the parent to the scene
engine.addEntity(menu3D)

const canvas = new UICanvas()
// create container inside canvas
const rect = new UIContainerRect(canvas)
rect.adaptHeight = true
rect.adaptWidth = true
rect.hAlign = 'left'
rect.vAlign = 'top'
rect.opacity = 0.8

canvas.visible = false

//-- SUN INFORMATION SCREEN
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
//-- MERCURY INFORMATION SCREEN
let merUITexture = new Texture("images/UI/UI_mercury.jpg")
let merImgScreen = new UIImage(rect, merUITexture)
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
//--DISCLAIMER INFORMATION SCREEN 1
let disclaimer = new Texture("images/UI/UI_disclaimer1.jpg")
let discImgScreen1 = new UIImage(rect, disclaimer)
discImgScreen1.name = "disclaimer1"
discImgScreen1.hAlign = 'left'
discImgScreen1.vAlign = 'top'
discImgScreen1.sourceLeft = 0
discImgScreen1.sourceTop = 0
discImgScreen1.sourceWidth = 1024
discImgScreen1.sourceHeight = 483
discImgScreen1.width = 1024
discImgScreen1.height = 512
discImgScreen1.visible = false
//--DISCLAIMER INFORMATION SCREEN 2
disclaimer = new Texture("images/UI/UI_disclaimer2.jpg")
export let discImgScreen2 = new UIImage(rect, disclaimer)
discImgScreen2.name = "disclaimer2"
discImgScreen2.hAlign = 'left'
discImgScreen2.vAlign = 'top'
discImgScreen2.sourceLeft = 0
discImgScreen2.sourceTop = 0
discImgScreen2.sourceWidth = 1024
discImgScreen2.sourceHeight = 483
discImgScreen2.width = 1024
discImgScreen2.height = 512
discImgScreen2.visible = false

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
//-- FACT BUTTON
let imgFactBtn = new Texture("images/UI/facts.png")
export let factBtn = new UIImage(rect, imgFactBtn)
factBtn.name = 'fact_btn'
factBtn.width = '203px'
factBtn.height = '81px'
factBtn.sourceWidth = 512
factBtn.sourceHeight = 226
factBtn.positionX = 755
factBtn.positionY = -130
factBtn.isPointerBlocker = true
//-- COMPARE BUTTON
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
//-- ARTSCAPE BUTTON
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
//-- NEXT BUTTON
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


const staticScreenGroup = {
    "sun": sunImgScreen,
    "mercury": merImgScreen,
    "disclaimer1": discImgScreen1,
    "disclaimer2": discImgScreen2
}
const closeMenuGroup = {
    "closeBtn": closeBtn
}
const disclaimerMenuGroup = {
    "nextBtn": nextBtn
}
const planetMenuGroup = {
    "factBtn": factBtn,
    "compareBtn": compareBtn,
    "artscapeBtn": artscapeBtn,
//    "factTxt": factTxt
}

const stateInfoUI = (function () {
    let UI_show: UIImage
    return {
        changeCurrentUI: function (ui_screen) {
            if (UI_show) {
                UI_show.visible = false
                log("current UI set to false")
            }
            UI_show = ui_screen
            log("assign new UI")
            log(UI_show.name)
            UI_show.visible = true
            //text_UI.value = 'WELCOME'
            canvas.visible = true
        },
        getCurrentUI: function () {
            return UI_show
        }
    }
}())

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

sunMenu.addComponent(
    new OnClick(e => {
        log("sun CLICKED")
        stateDynamicUI(true, false, true)
        stateInfoUI.changeCurrentUI(staticScreenGroup.sun)
    })
)
mercuryMenu.addComponent(
    new OnClick(e => {
        log("mercury CLICKED")
        stateDynamicUI(true, false, true)
        stateInfoUI.changeCurrentUI(staticScreenGroup.mercury)
    })
)
disclaimerMenu.addComponent(
    new OnClick(e => {
        log("disclaimer CLICKED")
        stateDynamicUI(false, true, true)
        stateInfoUI.changeCurrentUI(staticScreenGroup.disclaimer1)
    })
)

closeBtn.onClick = new OnClick(() => {
    log("Close Button Clicked")
    //stateInfoUI.changeCurrentUI(undefined)
    stateDynamicUI(false, false, false)
    stateInfoUI.getCurrentUI().visible = false
    canvas.visible = false
    //text_UI.value = 'WELCOME'
})
compareBtn.onClick = new OnClick(() => {
    log("Compare Button Clicked")

})
artscapeBtn.onClick = new OnClick(() => {
    log("Landscape Button Clicked")

})
nextBtn.onClick = new OnClick(() => {
    log("Next Button Clicked")
    log(stateInfoUI.getCurrentUI().name)
    if (stateInfoUI.getCurrentUI().name == 'disclaimer1') {
        stateInfoUI.changeCurrentUI(staticScreenGroup.disclaimer2)
    }
    else {
        stateInfoUI.changeCurrentUI(staticScreenGroup.disclaimer1)
    }
})