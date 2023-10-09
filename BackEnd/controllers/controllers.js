const getQueryBy = async (req, res) => {
    const url = req.originalUrl;
    const separator = '/';


    // Encuentra la posición de "By" en la URL
    const startIndex = url.indexOf('/g');
    console.log(startIndex + 'uwu');
    if (startIndex !== -1) {
        // Corta la URL después de "By" y elimina el primer '/'
        const subPath = url.substring(startIndex + 6); // +3 para omitir '/By'
        
        // Encuentra la próxima '/' después de "By" y corta la cadena
        const endIndex = subPath.indexOf(separator);
        if (endIndex !== -1) {
            const word = subPath.substring(0, endIndex);
            const wordAdap = word.substring(0, 1).toLowerCase() + word.substring(1);
            return wordAdap;
        }
    }

    return res.status(400).json({ error: "URL no válida" });
}

const getCollection = async (req, res) => {
    const url = req.originalUrl;
    const separator = '/';
console.log(url);
    const startIndex = url.indexOf(separator, 1);

    if (startIndex !== -1) {
        const endIndex = url.indexOf(separator, startIndex + 1);

        if (endIndex !== -1) {
            const subPath = url.substring(startIndex, endIndex);
            const word = subPath.slice(1); 
            const wordAdap = word.substring(0, 1).toUpperCase() + word.substring(1);
            return wordAdap;
        } else {
            return res.status(400).json({ error: "URL no válida" });
        }
    } else {
        return res.status(400).json({ error: "URL no válida" }); 
    }
}
const getAll = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate([
            {
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "skins",
                    localField: "skin",
                    foreignField: "code",
                    as: "skin"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },
            {
                $project: {
                    name: 1,
                    nickname:1,
                    email: 1,
                    password: 1,
                    account:1,
                    status:1,
                    skin:1,
                    code:1,
                    description:1,
                    category:1,
                    downloads:1,
                    image:1,
                    bedWars:1,
                    skyWars:1,
                    survival:1,
                    pvp:1,
                    status:1,
                    hungerGames:1,
                    buildBattle:1,
                    skyBlock:1,
                    eggWars:1,
                    creative:1,
                    prision:1,
                    capacity:1,
                    edition:1,    
                    texture: {
                        $cond: {
                            if: { $eq: ["$texture", []] },
                            then: "$$REMOVE",
                            else: "$texture"
                        }
                    },
                    skin: {
                        $cond: {
                            if: { $eq: ["$skin", []] },
                            then: "$$REMOVE",
                            else: "$skin"
                        }
                    },
                    mods: {
                        $cond: {
                            if: { $eq: ["$mods", []] },
                            then: "$$REMOVE",
                            else: "$mods"
                        }
                    },
                    version: {
                        $cond: {
                            if: { $eq: ["$version", []] },
                            then: "$$REMOVE",
                            else: "$version"
                        }
                    },
                    shaders: {
                        $cond: {
                            if: { $eq: ["$shaders", []] },
                            then: "$$REMOVE",
                            else: "$shaders"
                        }
                    },
                    
                }
            }
        ]);

        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
};

const getByID = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate([
            {
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },
            {
                $project: {
                    name: 1,
                    nickname:1,
                    email: 1,
                    password: 1,
                    account:1,
                    status:1,
                    skin:1,
                    code:1,
                    description:1,
                    category:1,
                    downloads:1,
                    image:1,
                    bedWars:1,
                    skyWars:1,
                    survival:1,
                    pvp:1,
                    status:1,
                    hungerGames:1,
                    buildBattle:1,
                    skyBlock:1,
                    eggWars:1,
                    creative:1,
                    prision:1,
                    capacity:1,
                    edition:1,    
                    texture: {
                        $cond: {
                            if: { $eq: ["$texture", []] },
                            then: "$$REMOVE",
                            else: "$texture"
                        }
                    },
                    mods: {
                        $cond: {
                            if: { $eq: ["$mods", []] },
                            then: "$$REMOVE",
                            else: "$mods"
                        }
                    },
                    version: {
                        $cond: {
                            if: { $eq: ["$version", []] },
                            then: "$$REMOVE",
                            else: "$version"
                        }
                    },
                    shaders: {
                        $cond: {
                            if: { $eq: ["$shaders", []] },
                            then: "$$REMOVE",
                            else: "$shaders"
                        }
                    },
                    
                }
            },
        ]);

        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByName = async (req, res) => {
    try {
       
        const word2 = await getQueryBy(req);
        console.log(word2+ 'uwu');
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(Collection);
    

        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },
            {
                $project: {
                    name: 1,
                    nickname:1,
                    email: 1,
                    password: 1,
                    account:1,
                    status:1,
                    skin:1,
                    code:1,
                    access:1,
                    version:1,
                    shaders:1,
                    ip:1,
                    description:1,
                    category:1,
                    downloads:1,
                    image:1,
                    bedWars:1,
                    skyWars:1,
                    survival:1,
                    pvp:1,
                    status:1,
                    hungerGames:1,
                    buildBattle:1,
                    skyBlock:1,
                    eggWars:1,
                    creative:1,
                    prision:1,
                    capacity:1,
                    edition:1,    
                    texture: {
                        $cond: {
                            if: { $eq: ["$texture", []] },
                            then: "$$REMOVE",
                            else: "$texture"
                        }
                    },
                    mods: {
                        $cond: {
                            if: { $eq: ["$mods", []] },
                            then: "$$REMOVE",
                            else: "$mods"
                        }
                    },
                    version: {
                        $cond: {
                            if: { $eq: ["$version", []] },
                            then: "$$REMOVE",
                            else: "$version"
                        }
                    },
                    shaders: {
                        $cond: {
                            if: { $eq: ["$shaders", []] },
                            then: "$$REMOVE",
                            else: "$shaders"
                        }
                    },
                    
                }
            }
            ,{
                $match: {[word2]: req.params.query}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

//La funcion de arriba volvió obsoletas todas estas de abajo DX
/* 
const getByVersion = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        console.log(typeof req.params.version);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: {version: req.params.version}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByCode = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: {code: req.params.code}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByCategory = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: {category: req.params.category}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByTexture = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: {texture: req.params.texture}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByShaders = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: {shaders: req.params.shaders}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByAcess = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: {access: req.params.access}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByMods = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: {mods: req.params.mods}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByPlataform = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: {plataform: req.params.plataform}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByCapacity = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: {capacity: req.params.capacity}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByIp = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: {ip: req.params.ip}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByMaps = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: {name: req.params.name}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}
 */
const getDescriptionByCode = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate([
            {
                $match: { code: code }
            },
            {
                $project: {
                    _id: 0,
                    description: "$description"
                }
            }
        ]);
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getMorePopular = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.find({ downloads: { $gt: "$downloads" } });
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getLessPopular = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.find({ downloads: { $lt: "$downloads" } });
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const post = async (req, res) => {
    const word = await getCollection(req);
    const Collection = require(`../models/${word}.js`);
    console.log(word);
    const data = new Collection(req.body);
    try {
        const newData = await data.save();
        return res.json(newData);
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const updateById = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.json(data);
    } catch (error) {
        res.status(404).send(error);
    }
}

const deleteById = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.deleteOne({ _id: req.params.id });
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}



module.exports = {
    getAll, getByID, getByName,
    getDescriptionByCode, getMorePopular, getLessPopular, getCollection,
    post , updateById, deleteById  

}