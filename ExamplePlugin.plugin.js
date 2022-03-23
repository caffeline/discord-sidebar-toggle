/**
 * @name sidebarToggle
 * @version 1.0
 * @description close and open sidebar
 * @author Caffeline
 * @website https://twitter.com/CLT_2
 */

const sideBarClassName = 'sidebar-1tnWFu'
const toolBarClassName = 'toolbar-3_r2xA'
const sideBarToggleIconClassName = 'iconWrapper-2awDjA clickable-ZD7xvu'

const addToggleButton = ()=>{
  const sideBar = document.getElementsByClassName(sideBarClassName)[0]
  const toolBar = document.getElementsByClassName(toolBarClassName)[0]
  const sideBarToggleIcon = document.createElement('div')

  sideBarToggleIcon.className = sideBarToggleIconClassName
  sideBarToggleIcon.innerHTML = '<span>みゅ</span>'
  sideBarToggleIcon.setAttribute('role','button')
  sideBarToggleIcon.setAttribute('aria-label','サイドバーの開閉')
  sideBarToggleIcon.setAttribute('tabindex','0')

  sideBarToggleIcon.addEventListener('click',function(){
    const nowWidth = Number(sideBar.style.width.match(/(?<wString>\d+)px/)?.groups.wString) ?? 240
    if(nowWidth!==0){
      sideBar.style.width = '0px'
    }else{
      sideBar.style.width = '240px'
    }
  })

  toolBar.prepend(sideBarToggleIcon)
}

module.exports = class sidebarToggle {
  start() {
    BdApi.showToast("sidebarToggle plugin loaded!", {type:"success", icon: true})
    addToggleButton()
  }

  observer(changes) {
    const isIncludeSection = Array.from(changes.addedNodes).map((node)=>{
      return node.nodeName
    }).some((name)=>{
      return name === "SECTION"
    })
    if(isIncludeSection){
      addToggleButton()
    }
  }

  stop() {
    BdApi.showToast("sidebarToggle plugin stopped.", {type:"info", icon: true})
  }
}
