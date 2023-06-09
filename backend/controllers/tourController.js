import Tour from  "../models/Tour.js";

//create new tour 

export const createTour = async (req, res) => {
    
    const newTour = new Tour(req.body);

    try{
        const savedTour = await newTour.save();
        res.status(200).json({success: true, message: "Successfully created", data: savedTour});
    } catch(err){
        res.status(500).json({success: false, message: "Failed to create. Try again"});

    }
}

//update tour 

export const updateTour = async (req, res) => {
    const id = req.params.id;
    try{
        const updatedTour  = await Tour.findByIdAndUpdate(id,{
            $set: req.body,
        },{new: true})
        res.status(200).json({success: true, message: "Successfully updated", data: updatedTour});

    }catch(err){
        res.status(500).json({success: false, message: "Failed to update. Try again"});

    }

}

//delete tour 


export const deleteTour = async (req, res) => {
    const id = req.params.id;
    try{
        await Tour.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Successfully deleted"});

    }catch(err){
        res.status(500).json({success: false, message: "Failed to delete. Try again"});

    }
    
}


//getSingle tour 


export const getSingleTour = async (req, res) => {
    const id = req.params.id;
    try{
       const tour = await Tour.findById(id);
        res.status(200).json({success: true, message: "Successfully Found!",data: tour});

    }catch(err){
        res.status(404).json({success: false, message: "Not Found. Try again"});

    }
    
}

//getAll tour 


export const getAllTour = async (req, res) => {
    //for pagination
    const page = parseInt(req.query.page) 


    try{
            const tours = await Tour.find({})

            res.status(200).json({success: true, count:tours.length ,message: "All Tours!",data: tours});

    }catch(err){
        res.status(404).json({success: false, message: "Not Found. Try again"});

    }
    
}

//get Tour by search

export const getTourBySearch = async (req, res) => {
    //for pagination
        const city = new RegExp(req.query.city, 'i')
        const distance = parseInt(req.query.distance);
        const maxGroupSize = parseInt(req.query.maxGroupSize)
    try{
        //gte greater than equal
            const tours = await Tour.find({city,distance:distance,maxGroupSize:maxGroupSize})

            res.status(200).json({success: true,message: "Tour was found!",data: tours});

    }catch(err){
        res.status(404).json({success: false, message: "Not Found. Try again"});

    }
    
}   

