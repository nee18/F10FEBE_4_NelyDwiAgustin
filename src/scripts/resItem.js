// Fetch data json
import ('../DATA.json').then(({default: jsonData}) => {
    console.log(jsonData)
    const datas = jsonData.restaurants;
    let dataList = '';
    datas.forEach(function(data) {
        dataList +=`
        <div class="list_item">
            <img class="list_item_thumb" src="${data.pictureId}" alt="${data.name}" title="${data.name}">
            <div class="city">📍${data.city}</div>
            <div class="list_item_content">
                <p class="list_item_rating">
                    Rating : ⭐${data.rating}
                </p>
                <h1 class="list_item_title"><a href="#">${data.name}</a></h1>
                <div class="list_item_desc">${data.description.slice(0, 500)}...</div>
            </div>
        </div>
        `;
    });
    document.querySelector('#item').innerHTML = dataList;  
});