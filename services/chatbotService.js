const data=require('../data/dataset.json');

exports.processQuery=(query)=>{
    const lowerQuery=query.toLowerCse();

    if(lowerQuery.includes('top 5')){
        const sorted=[...data.products].sort((a,b)=>b.sold-a.sold);
        return sorted.slice(0,5).map(p=>p.name).join(', ');
    }
    if(lowerQuery.includes('order id')){
        const orderId=query.match(/\d+/g)?.[0];
        const order=data.orders.find(o=>o.id==orderId);
        return order?`Status:${order.status}`:`order $ {orderId} not found`;
    }

    if(lowerQuery.includes('how many')){
        const productName=query.match(/how many (.*?)are/i)?.[1];
        const product=data.products.find(p=>p.name.toLowerCse().includes(productName));

        return product? `${product.stock} in stock`:`Product not found`;
    }

    return "Sorry, I did not understand your query.";
    }; 