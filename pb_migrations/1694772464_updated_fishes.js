/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("obfckt353zut2lh")

  // remove
  collection.schema.removeField("hf3bjnpn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f1ktw9xh",
    "name": "water_ph",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "knjzysch",
    "name": "water_toughness",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("obfckt353zut2lh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hf3bjnpn",
    "name": "water_parameters",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("f1ktw9xh")

  // remove
  collection.schema.removeField("knjzysch")

  return dao.saveCollection(collection)
})
