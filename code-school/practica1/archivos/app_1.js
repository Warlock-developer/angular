var app = angular.module('store', []);
app.controller('StoreController', function () {
    this.product = gem;
    this.products = gems;
})
app.controller('PanelController', function () {
    this.tab = 1;

    this.selectTab = function (setTab) {
        this.tab = setTab;
    };
    
    this.isSelected = function(checkTab){
        return this.tab === checkTab;
    };
});

var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    canPurchase: true,
    souldOut: true,
    images: [
        {
            full: '',
            thumb: ''
        },
        {
            full: '',
            thumb: ''
        },
    ]
};


var gems = [
    {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        canPurchase: true,
        souldOut: true,
        images: [
            {
                full: '',
                thumb: ''
            },
            {
                full: '',
                thumb: ''
            },
        ]
    },
    {
        name: 'Pentagonal Gem',
        price: 5.95,
        description: 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
        canPurchase: true,
        souldOut: true,
    }
];
