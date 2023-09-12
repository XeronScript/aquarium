/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wvub83znzpfog23",
    "created": "2023-09-12 21:16:26.838Z",
    "updated": "2023-09-12 21:16:26.838Z",
    "name": "aquariums",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "id3xo6vj",
        "name": "accessories",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "50ient7gnfhx1vn",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "xbwotlf4",
        "name": "fishes",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "obfckt353zut2lh",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "dhjgm9ej",
        "name": "plants",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "vjcj2n38sc5htw3",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "k6oji55g",
        "name": "owned",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wvub83znzpfog23");

  return dao.deleteCollection(collection);
})
