const  scroll =  () => {
    const mainActionBtn = document.getElementById('main-action-btn');
    const links = document.querySelectorAll('.menu-item > a')
    const btnOrder = document.querySelectorAll('.order-btn');
    console.log(btnOrder);

    btnOrder.forEach((btn) => {
        btn.onclick = () => {
            document.getElementById('order').scrollIntoView(
            {
                behavior: "smooth"
            }
            )
        } 
    });

    links.forEach((item, i) => {
        item.onclick = () => {
            document.getElementById(item.getAttribute('data-link')).scrollIntoView(
            {
                behavior: "smooth"
            }
            )
        } 
    });

    mainActionBtn.onclick = () => {
        document.getElementById('change').scrollIntoView(
            {
                behavior: "smooth"
            }
        )
    };
} 

export default scroll;