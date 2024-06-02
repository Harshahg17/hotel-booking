import connectdb from "@/db";
import Hotel from "@/models/hotel-model";

export default async function handler(req,res){
  if(req.method==="GET")
    {
      connectdb();
      if(req.query.id)
        {
            const hotels= await Hotel.findById(req.query.id);
            res.status(200).json({msg:"good",hotels});
        }

    }
}