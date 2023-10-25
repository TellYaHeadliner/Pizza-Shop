let pizzas = [
    {
        id: 1,
        ten_pizza: "Hải sản xốt cà chua cay với phô mai hun khói Pizza",
        ten_mota: 'Tôm, mực, nghêu, phô mai hun khói và xốt cà chua',
        price_des: '263000 VND',
        price: 263000,
        count: 0,
    },

    {
        id: 2,
        ten_pizza: "Margherita Pizza",
        ten_mota: 'Nguyên liệu: phô mai Mozzarella, Grano Padano, xốt cà chua và húng tây (Món chay)',
        price_des: '160000 VND',
        price: 160000,
        count: 0,

    },

    {
        id: 3,
        ten_pizza: "Pizza cá hồi sốt kem miso",
        ten_mota: 'Nguyên liệu: Cá hồi với miso ngọt và xốt kem béo thơm',
        price_des: '273000 VND',
        price: 273000,
        count: 0,

    },

    {
        id: 4,
        ten_pizza: "Tôm và xốt Mayonnaise Pizza",
        ten_mota: 'Nguyên liệu:Tôm và bông cải xanh kèm xốt mayonnaise',
        price_des: '245000 VND',
        price: 245000 ,
        count: 0,


    },

    {
        id: 5,
        ten_pizza: "Gà sốt Teriyaki Pizza",
        ten_mota: 'Gà xốt nước tương ngọt với rong biển, lá tía tô và mayonnaise',
        price_des: '210000 VND',
        price: 210000,
        count: 0,


    },
    
    {
        id: 6,
        ten_pizza: "Pizza bò kho",
        ten_mota: 'Được lấy cảm hứng từ món Bò kho/Bò sốt vang, một món ăn quen thuộc của người Việt Nam. Phần gân và thịt bò được om trong nhiều giờ cùng vang đỏ, ngũ vị hương, cà rốt, khoai tây, hành tây, cà chua và các loại gia vị, kết hợp vị béo nhẹ từ phô mai, vị giòn rụm của bánh phở chiên, sắc xanh từ hành hoa cùng các loại rau xanh.',
        price_des: '200000 VND',
        price: 200000,
        count: 0,


    },

    {
        id: 7,
        ten_pizza: "4 loại nấm Pizza",
        ten_mota: 'Món chay, nấm trắng và nâu, nấm linh chi trắng và nâu, tỏi',
        price_des: '190000 VND',
        price: 190000,
        count: 0,


    },

    {
        id: 8,
        ten_pizza: "Xốt bí ngòi quế tây Pizza",
        ten_mota: 'Món chay, bí ngòi và hoa cùng xốt húng tây và hạt',
        price_des: '170000 VND',
        price: 170000,
        count: 0,

    },

]

var sum = 0;
var localstorage;
var count_button = 0;

function themVoGioHang(id)
{
    var temp_count;
    for (let i = 0;i < pizzas.length;i++){
        if (id === pizzas[i].id){
            pizzas[i].count++;
            temp_count = count_button;
            count_button++;
            var gioHang = document.getElementById('gioHang');
            var existingItem = gioHang.querySelector(`#pizza-${pizzas[i].id}`);
            if (existingItem)
            {
                existingItem.textContent = `${pizzas[i].ten_pizza}: ${pizzas[i].price_des} x${pizzas[i].count}`;
                count_button = temp_count;
            }
            else
            {
                var newLi = document.createElement('li');
                newLi.id = `pizza-${pizzas[i].id}`;
                newLi.textContent = `${pizzas[i].ten_pizza}: ${pizzas[i].price_des} x${pizzas[i].count}`;
                gioHang.appendChild(newLi);
            }

            var sum_p = document.getElementById('sum');
            sum += pizzas[i].price;
            console.log(sum);
            sum_p.innerText = "Tổng cộng: " + sum + "VND";

            localstorage = localStorage.setItem(`pizza-${pizzas[i].id}`,JSON.stringify(pizzas[i]));
            localStorage.setItem("count", count_button.toString());

        }
    }
}


function render(){
//     <!-- <div class="col-md-12 pb-3">
//     <div class="card bg-light w-100 d-flex flex-row text-left">
//       <img src="/img/1.webp" alt="" width="100px" height="100px" class="p-2">
//       <div class="card-body p-3" style="text-align: left;">
//         <h5>Tên món</h5>
//         <div class="card-context d-flex flex-row">
//           <p class="price">100000 VND</p>
//           <p style=" margin-left: 10px;" class="count">x3</p>
//         </div>
//       </div>
//     </div>
//   </div> -->
    const count_data = localStorage.getItem("count");
    const productLists = document.getElementById("product-lists");
    for(var i = 0; i < count_data;i++){
        var pizza_key = JSON.parse(localStorage.getItem(`pizza-${i + 1}`));;
        
        var Element = document.createElement('div');
        Element.className = "col-md-12 pb-3";
        
        var CardElement =  document.createElement('div');
        CardElement.className = "card bg-light w-100 d-flex flex-row text-left";

        var imgElement = document.createElement('img');
        imgElement.src = "/img/" + pizza_key['id'] + ".webp";
        imgElement.className = "p-2";
        imgElement.style.width = "100px";
        imgElement.height.height = "100px";

        var CardBodyElement = document.createElement('div');
        CardBodyElement.className = "card-body p-3";
        CardBodyElement.style.textAlign = "left";

        var titleElement = document.createElement('h5');
        titleElement.innerHTML = pizza_key.ten_pizza;

        var CardContextElement = document.createElement('div');
        CardContextElement.className = "card-context d-flex flex-row";

        var priceElement = document.createElement('p');
        priceElement.className = "price";
        priceElement.innerHTML = pizza_key.price + " VND" + " " + "x" + pizza_key.count;

        CardContextElement.appendChild(priceElement);
        CardBodyElement.appendChild(titleElement);
        CardBodyElement.appendChild(CardContextElement);
        CardElement.appendChild(imgElement);
        CardElement.appendChild(CardBodyElement);
        Element.appendChild(CardElement);

        productLists.appendChild(Element);

    }
}

render();

function GetInfo(){
    event.preventDefault();

    var fullname = document.getElementById('InputName');
    var address = document.getElementById('InputAddress');
    var number = document.getElementById('InputNumberPhone');
    var value_fullname = fullname.value;
    var value_address = address.value;
    var value_number = number.value;
    var notification = document.getElementById('notification');

    while(notification.firstChild)
    {
        notification.removeChild(notification.firstChild);
    }

    if (value_fullname === "" || value_address === "" || value_number === ""){
        var p_notification = document.createElement('p');
        p_notification.innerHTML = "Thông tin của bạn không đầy đủ";
        notification.appendChild(p_notification);
    }
    else
    {
        window.location.href = 'complete.html';
        
    }

}







