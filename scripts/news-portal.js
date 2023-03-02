const fetchCatagories = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then((res) => res.json())
    .then((data ) => showCatagories(data.data))
}

const showCatagories = data =>{
    console.log(data)
const categoriesContainer = document.getElementById('catagories-container')
data.news_category.forEach(singleCategory => {
    // console.log(singleCategory)
    // categoriesContainer.innerHTML += `<a class= "nav-link" hrep ="#">${singleCategory?.category_name}</a>` 

    // step 2 
    let linkContainer = document.createElement('p');
    linkContainer.innerHTML = `<a class= "nav-link" hrep ="#" onclick ="fetchCatagoriesNews('${singleCategory.category_id}','${singleCategory?.category_name}')">${singleCategory?.category_name}</a>` 
    categoriesContainer.appendChild(linkContainer)
})
}
const fetchCatagoriesNews = (category_id ,category_name) =>{
    // console.log(category_id);
    const url = ` https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url).then( res => res.json())
    .then(data => showAllNews(data.data,category_name))
    
}
// daynamik kora function count korle number o count korbe

const showAllNews =  (data ,category_name) =>{
     console.log(data,category_name)
     document.getElementById('news-count').innerText = data.length
     document.getElementById('catagory-name').innerText = category_name;
}
// fetchCatagories()