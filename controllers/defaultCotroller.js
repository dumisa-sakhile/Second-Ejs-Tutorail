
const getHome = (req,res)=>{
    data = {
        title : 'Home Page'
    }
    res.render('home',data)
}


const getAbout = (req,res)=>{
    data = {
        title : 'about Page'
    }
    res.render('about',data)
}


const getContact = (req,res)=>{
    data = {
        title : 'contact Page'
    }
    res.render('contact',data)
}


module.exports = {
    getAbout,
    getHome,
    getContact
}