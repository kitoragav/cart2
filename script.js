var goods = [
	{name: "Apples",
	picture: "https://www.comenaranjas.com/images/stories/virtuemart/product/manzana-royal.jpg",
	cost: 10,
	count: 23,
	identity: "apple"},

	{name: "Pears",
	picture: "https://cdn.shopify.com/s/files/1/2331/3573/products/Fresh-Royal-Gala-Apples-from-france_267873c2-d117-42b3-babf-c740ab2ddcb7.jpg?v=1506746289",
	cost: 10,
	count: 23,
	identity: "pearse"},

	{name: "Peaches",
	picture: "https://onlinesabjiwala.com/wp-content/uploads/2018/03/Peach-300x300.jpg",
	cost: 10,
	count: 23,
	identity: "peach"}
]
function goodsGenerating(goods){
	let startDiv = `<div class="goods">`,
		endDiv = `</div>`,
		result = ``;
	for (var index = 0; index < goods.length; index++) {
		const item = goods[index];
		result += `<div class="goods-item">
			<div class="goods-item-about">
				<div class="goods-item__name">${item.name}</div>
				<div class="goods-item__picture">
					<img src="${item.picture}" alt="">
				</div>
				<div class="goods-item__cost">
					<span class="goods-item__cost-title">Price:</span>
					<span class="goods-item__cost-price">${item.cost}</span>
				</div>
				<div class="goods-item__count">
					<span class="goods-item__count-titke">On the scld</span>
					<span class="goods-item__count-number">${item.count}</span>
				</div>
			</div>
			<div class="goods-item-buy" data-identity="${item.identity}">
				<button class="plus">+</button>
				<button class="sum">0</button>
				<button class="minus" disabled="disabled">-</button>
			</div>
			<button class="buy">Buy</button>
		</div>`
	};
	return `${startDiv}${result}${endDiv}`;
};

$("body").prepend(goodsGenerating(goods));
//plus
$('.plus').click(function(event){
	let identity = $(this).parent().attr('data-identity');
	for (var index = 0; index < goods.length; index++) {
		const item = goods[index];
		if (item.identity === identity){
			let currentSum = $(this).parent().find('.sum').text();
			minusIsDisabled = $(this).parent().find('.minus').attr('disabled');
			if (minusIsDisabled) {
				$(this).parent().find('.minus').removeAttr('disabled');
			};
			$(this).parent().prev().find('.goods-item__count-number').text(--item.count);
			$(this).parent().find('.sum').text(++currentSum);

			if (item.count === 0) {
				$(this).attr('disabled', '');
				console.log('that all');
			}
			break;
		};
	};
});

///minus

$('.minus').click(function(event){
	let identity = $(this).parent().attr('data-identity');
	for (var index = 0; index < goods.length; index++) {
		const item = goods[index];
		if (item.identity === identity){
			let currentSum = $(this).parent().find('.sum').text();
			plusIsDisabled = $(this).parent().find('.plus').attr('disabled');
			if (plusIsDisabled) {
				$(this).parent().find('.plus').removeAttr('disabled');
			};
			$(this).parent().prev().find('.goods-item__count-number').text(++item.count);
			$(this).parent().find('.sum').text(--currentSum);

			if (currentSum === 0) {
				$(this).attr('disabled', '');
				console.log('that all');
			}
			else{
				$(this).removeAttr('disabled');
			}
			break;
		};
	};
});
$(".buy").on("click",function(){
        id = $(this).attr("for");
 
        $("goods-item__name"+id)
            .clone()
            .css({'position' : 'absolute', 'z-index' : '11100', top: $(this).offset().top-300, left:$(this).offset().left-100})
            .appendTo("body")
            .animate({opacity: 0.05,
                left: $(".cart-text").offset()['left'],
                top: $(".cart-text").offset()['top'],
                width: 20}, 1000, function() {
                $(this).remove();
            });
 
    });
function Cart(goods){
	let startDiv = `<div class="cart">`,
		endDiv = `</div>`,
		result = ``;
	for (var index = 0; index < goods.length; index++) {
		const item = goods[index];
		result += `<div class="cart-items">
			<div class="cart-item">
				<div class="cart-item__picture">
					<img src="${item.picture}" alt="">
				</div>
				<div class="cart-item__name">${item.name}</div>
				<div class="cart-item__cost">${item.coast}</div>
			</div>
			`
	};
	return `${startDiv}${result}${endDiv}`;
};
$("body").prepend(Cart(goods));