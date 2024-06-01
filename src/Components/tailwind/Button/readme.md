# Button API

API references doc for the button component and usage

| Name     | Type                                                                              | Default | Description                                                                                              |
|----------|-----------------------------------------------------------------------------------|---------|----------------------------------------------------------------------------------------------------------|
| children | node                                                                              | -       | The content of the button                                                                                |
| color    | \|"primary" \|"secondary" \|"info" \|"warning" \|"danger" \|"success" \|"neutral" | primary | The background color of the button                                                                       |
| size     | \|"small" \|"medium" \|"large"                                                    | small   | The size of the button                                                                                   |
| variant  | \|"outlined" \|"ghost" \|"filled" \|"shadow"                                      | filled  | The variant shape to use                                                                                 |
| rounded  | boolean                                                                           | false   | If true the button will be rounded  ⚠️ If true, the button accepts only **icons** and No text or children |
| disabled | boolean                                                                           | false   | If true button will be disabled                                                                          |
| loading  | boolean                                                                           | false   | If true a loading spinner shows and button will be disabled                                              |
| icon     | node                                                                              | -       | svg element placed at the beginning of the button , ⚠️ **Google icons are recomended**                    |
| width    | number                                                                            | auto    | Width size in **rem** unit                                                                               |
| height   | number                                                                            | auto    | Height size in **rem** unit                                                                              |