export interface IOrderable {
  id: string;
  name: string;
  components: string[];
}

export interface IComponent {
  id: string;
  choices: string[];
}

export interface IChoice {
  id: string;
  items: string[];
}

export interface IItem {
  id: string;
  name: string;
  customizations: string[];
}

export interface ICustomChoice {
  id: string;
  name: string;
}

export interface ICustomization {
  id: string;
  name: string;
  // ICustomChoice
  customChoiceIds: string[];
} 

export type ICategory = string;

/*
Single Item, Steak:
IOrderable {
  itemChoices: [
    IItemChoice {
      items: [
        IItem {
          name: "Steak",
          customizations: [
            ICustomization {
              name: "Doneness",
              customChoiceIds: {
                ICustomChoice: {
                  name: "Rare"
                },
                ICustomChoice: {
                  name: "Medium"
                },
                ICustomChoice: {
                  name: "Well done"
                },
              }
            }
          ]
        }
      ],
      minSize: 1,
      maxSize: 1,
    }
  ]
}

Bundle Item, Daily special with a side and a drink
IOrderable {
  itemChoices: [
    IItemChoice {
      name: "Main course"
      items: [
        IItem {
          name: "Chicken"
        },
        IItem {
          name: "Pork chop"
        }
      ]
      minSize: 1,
      maxSize: 1,
    },
    IItemChoice {
      name: "Side"
      items: [
        IItem {
          name: "Fries"
        },
        IItem {
          name: "Salad"
        }
      ]
    },
    minSize: 1,
    maxSize: 1,
  ]
}
*/