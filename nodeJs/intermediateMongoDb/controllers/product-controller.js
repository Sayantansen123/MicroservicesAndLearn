const Product = require("../models/product")

const  insertSampleProducts = async (req, res) => {
    try {
        const sampleProducts = [
            {
                name: "Laptop",
                category: "Electronics",
                price: 999,
                inStock: true,
                tags: ["computer", "tech"],
            },
            {
                name: "Smartphone",
                category: "Electronics",
                price: 699,
                inStock: true,
                tags: ["mobile", "tech"],
            },
            {
                name: "Headphones",
                category: "Electronics",
                price: 199,
                inStock: false,
                tags: ["audio", "tech"],
            },
            {
                name: "Running Shoes",
                category: "Sports",
                price: 89,
                inStock: true,
                tags: ["footwear", "running"],
            },
            {
                name: "Novel",
                category: "Books",
                price: 15,
                inStock: true,
                tags: ["fiction", "bestseller"],
            },
        ];

        const result = await Product.insertMany(sampleProducts);
        res.status(201).json({
            succes: true,
            data: `Inserted ${result.length} sample products`,
        });

    } catch (error) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Some error occured!",
        });
    }
}

const getProductsStats = async(req,res)=>{
    try {
     const result = await Product.aggregate([
       //stage1 lets match product which are more than 50 in price and inStock are true
       {
           $match:{
            inStock : true,
            price:{
                $gte : 50,
            }
           }
       },
       //now lets group the product category wise and get the average price
       {
          $group:{
            _id: "$category",
            avgPrice: {
                $avg : "$price"
            },
            count:{
                $sum : 1,
            }
          }
       }
     ])
     res.status(200).json({
        succes:true,
        data:result,
     })
        
    } catch (error) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Some error occured!",
        });
    }

}


//prouct analysis routes
const getProductAnalytics = async(req,res)=>{
    try {
       const result = await Product.aggregate([
        
            {
                $match:{
                 category : "Electronics"
                }
            }, 
            {
                $group:{
                    _id:null,
                    totalRevenue:{
                        $sum : "$price"
                    },
                    averagePrice:{
                        $avg : "$price"
                    },
                    maxProductPrice :{
                        $max : "$price"
                    },
                    minProductPrice :{
                        $min : "$price"
                    }
                }
            }
            
                 
       ])
       res.status(200).json({
        succes:true,
        data:result,
     })   
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Some error occured!",
        });
    }
}




module.exports = {
    insertSampleProducts,
    getProductsStats,
    getProductAnalytics
}