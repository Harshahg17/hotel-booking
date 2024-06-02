import connectdb from "@/db";
import Hotel from "@/models/hotel-model";
export default async function handler(req,res)
{ 
    connectdb();


    if(req.method==="GET")
      {
          const hotels= await Hotel.find({location:req.query.city});
          if(hotels.length>0)
            {
              res.status(200).json({msg:"hotel found", hotels}); 
            }  
          const allhotel= await Hotel.find({});
          return res.status(200).json({msg:"hotel found",allhotel});
      }

}