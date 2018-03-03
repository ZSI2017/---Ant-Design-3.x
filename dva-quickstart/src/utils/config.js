const API = '/api'

module.exports = {
  name:"sendex-mng",
  api:{
    dataApi:`${API}/sourceData`,
    menuApi:`${API}/menuList`,
    myTableApi:`${API}/mytable`
  },
  openPages:["/login"]
}
