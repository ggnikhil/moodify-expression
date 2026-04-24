const followModel = require("../models/follow.model")

async function followUserController(req,res){
    const followingUser = req.user.username
    const followeeUser = req.params.username

    const isfolloweeExist = await followModel.findOne({followeeUser})

    if(isfolloweeExist){
        return res.status(404).json({
            message:"user not found"
        })
    }

    const isAlreadyfollow = await followModel.findOne({
        following:followingUser,
        followee:followeeUser
    })

    if(isAlreadyfollow){
        return res.status(200).json({
            message:"you already follow this user",
            isAlreadyfollow
        })
    }

    if(followingUser === followingUser){
        return res.status(200).json({
            message:"you cannot follow yourself"
        })
    }

    const followRecord = await followModel.create({
        following:followingUser,
        followee:followeeUser
    })

    res.status(201).json({
        message:"followed successfully",
        followRecord
    })
}

async function unFollowUserController(req,res){
    const followingUser = req.user.username
    const followeeUser = req.params.username

    const isUserFollowing = await followModel.findOne({
        following:followingUser,
        followee:followeeUser
    })

    if(!isUserFollowing){
        return res.status(200).json({
            message:"you not follow this user"
        })
    }

    await followModel.findByIdAndDelete(isUserFollowing._id)

    res.status(200).json({
        message:"you unfollow the user successfully"
    })
} 

module.exports = {
    followUserController,
    unFollowUserController
}