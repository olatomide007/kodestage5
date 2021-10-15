let galleryItems = [
    {
        gallery_img: 'images (1)',
        productName: 'Long Wavy Hair',
        price: '$400'
        
    },

    {
        gallery_img: 'images (2)',
        productName: 'Short Wavy Hair',
        price: '$300'
        
    },

    {
        gallery_img: 'images (3)',
        productName: 'Face Treatment',
        price: '$500'
        
    },

    {
        gallery_img: 'images',
        productName: 'Normal Stlye',
        price: '$50'
        
    },

    {
        gallery_img: 'istockphoto-1147811403-612x612',
        productName: 'International Hair',
        price: '$700'
        
    },

    {
        gallery_img: 'woman-relaxing-beauty-salon_23-2148895558',
        productName: 'Face Cosmetic',
        price: '$450'
        
    },

    {
        gallery_img: '1_pKVQe7_ufTppZM0p-BYNrg',
        productName: 'Manicure',
        price: '$100'
        
    },

    {
        gallery_img: 'Best-Braided-Big-Box-hairstyles-for-Black-Women2',
        productName: 'Braiding',
        price: '$200'
        
    },

    {
        gallery_img: 'images (5)',
        productName: 'African Style',
        price: '$250'
        
    },

    {
        gallery_img: 'images (6)',
        productName: 'Pedicure',
        price: '$150'
        
    },

    {
        gallery_img: 'images (7)',
        productName: 'Eyelashes Treatment',
        price: '$350'
        
    },

    {
        gallery_img: 'beautiful-girl-long-wavy-hair-260nw-1765573877',
        productName: 'Full Treatment',
        price: '$800'
        
    },
]
 //console.log(galleryItems);
    let mainContent = document.getElementById('main');
    let html = "";
 galleryItems.forEach(e => {
     html += `
     <a href="#" class="text-decoration-none">
                  <img src="./img/${gallery_img}.jpg" alt="woman" class="img-fluid change-height">
                  <div class="name-bg bg-black text-white pb-1">
                    <h3 class="fw-bold fs-4 pt-3 pb-0">${productName}</h3>
                    <h4>${price}</h4>
                  </div>
            </a>
   `
     console.log(e);
     mainContent.innerHTML = html;
 })