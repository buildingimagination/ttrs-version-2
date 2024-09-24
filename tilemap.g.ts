// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100007030303030303030303030303030301040000000000000000000000000000020400000000000000000000000000000204000000000000000000000000000002040000000000000000000000000000020400000000000000000000000000000204000000000000000000000000000002040000000000000000000000000000020400000000000000000000000000000204000000000000000000000000000002040000000000000000000000000000020400000000000000000000000000000204000000000000000000000000000002040000000000000000000000000000020400000000000000000000000000000206080808080808080808080808080805`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . 2 . 2 
2 . . . . . . . . . . . . 2 . 2 
2 . . . . . . . . . . . . 2 . 2 
2 . . . . . . . . . . . . 2 . 2 
2 . . . . . . . . . . . . 2 . 2 
2 . . . . . . . . . . . . 2 . 2 
2 . . . . . . . . . . . . 2 . 2 
2 . . . . . . . . . . . . 2 . 2 
2 . . . . . . . . . . . . 2 . 2 
2 . . . . . . . . . . . . 2 . 2 
2 . . . . . . . . . . . . 2 . 2 
2 . . . . . . . . . . . . 2 . 2 
2 . . . . . . . . . . . . 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles7,sprites.builtin.forestTiles11,sprites.builtin.forestTiles6,sprites.builtin.forestTiles9,sprites.builtin.forestTiles15,sprites.builtin.forestTiles13,sprites.builtin.forestTiles5,sprites.builtin.forestTiles14], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
