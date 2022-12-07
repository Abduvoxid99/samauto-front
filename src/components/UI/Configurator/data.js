export const stepsData = [
    {
        id: '7f4353f6-0123-49be-9d14-dfc3fed91157',
        title: 'Тип кузова',
        multiply: true,
    },
    {
        id: '61a304dd-3733-4b6e-8e8b-3113a8541aec',
        title: 'Грузоподъёмность',
        multiply: false,
    },
    {
        id: '101d2d62-ddb6-4939-afe2-94decae4aaa3',
        title: 'Тип топлива',
        multiply: false,
    },
    {
        id: '415829e1-5e15-45c8-9dbb-1326ccdfdb4b',
        title: 'Колесная формула',
        multiply: false,
    },
]

export const bodyTypes = [
    {
        id: '6e3f480a-3787-4617-943d-60317b5bae07',
        categoryId: '7f4353f6-0123-49be-9d14-dfc3fed91157',
        label: 'Бортовой',
        image: '/images/ConfiguratorImg.png',
        isChecked: false
    },
    {
        id: '85aed8b0-95f8-4f5a-b421-b3a53d8f2f2e',
        categoryId: '7f4353f6-0123-49be-9d14-dfc3fed91157',
        label: 'Автофургон',
        image: '/images/ConfiguratorImg.png',
        isChecked: false
    },
    {
        id: '8b88fd1a-8ff1-4f58-a08f-3c01d9eace0b',
        categoryId: '7f4353f6-0123-49be-9d14-dfc3fed91157',
        label: 'Тентованный',
        image: '/images/ConfiguratorImg.png',
        isChecked: true
    },
    {
        id: 'c932481e-50fa-48b8-a9f8-013c477d6209',
        categoryId: '7f4353f6-0123-49be-9d14-dfc3fed91157',
        label: 'Рефрижератор',
        image: '/images/ConfiguratorImg.png',
        isChecked: false
    },
    {
        id: '3cbc650c-c803-4852-a4ff-48cab99ed6fc',
        categoryId: '7f4353f6-0123-49be-9d14-dfc3fed91157',
        label: 'Самосвал',
        image: '/images/ConfiguratorImg.png',
        isChecked: false
    },
    {
        id: '0c3ec363-9f71-4323-80e1-43f444f81661',
        categoryId: '7f4353f6-0123-49be-9d14-dfc3fed91157',
        label: 'Изотермическмй',
        image: '/images/ConfiguratorImg.png',
        isChecked: false
    },
    {
        id: 'd5f1fed5-b2cd-4b3e-b58f-108ef4d418b0',
        categoryId: '7f4353f6-0123-49be-9d14-dfc3fed91157',
        label: 'Тягач',
        image: '/images/ConfiguratorImg.png',
        isChecked: false
    },
]

export const loadCapacities = [
    {
        id: '4076c893-b99e-42b6-83f0-212c5fa8250a',
        categoryId: '61a304dd-3733-4b6e-8e8b-3113a8541aec',
        label: 'от 1 до 4 тонн',
        isChecked: false
    },
    {
        id: 'f14b2757-98e9-45ef-bd66-772a1ca52508',
        categoryId: '61a304dd-3733-4b6e-8e8b-3113a8541aec',
        label: 'от 1 до 4 тонн',
        isChecked: false
    },
    {
        id: 'd8fe7ece-50f9-4e2b-b99e-4ad5338b9062',
        categoryId: '61a304dd-3733-4b6e-8e8b-3113a8541aec',
        label: 'от12 до 16 тонн',
        isChecked: false
    },
    {
        id: '14a80320-147b-495f-a10e-573f9e360da8',
        categoryId: '61a304dd-3733-4b6e-8e8b-3113a8541aec',
        label: 'от 8 до 12 тонн',
        isChecked: false
    },
    {
        id: '79d32c93-bcbd-46f6-a40c-786c56ff16d6',
        categoryId: '61a304dd-3733-4b6e-8e8b-3113a8541aec',
        label: 'от12 до 16 тонн',
        isChecked: false
    },
    {
        id: '7ce67ace-b266-436b-b27c-5a8d75bc4e14',
        categoryId: '61a304dd-3733-4b6e-8e8b-3113a8541aec',
        label: 'от 8 до 12 тонн',
        isChecked: true
    },
    {
        id: '0d57e091-2ee4-4c0c-884e-7e692d8ceea7',
        categoryId: '61a304dd-3733-4b6e-8e8b-3113a8541aec',
        label: 'от 16 до 20 тонн',
        isChecked: false
    },
    {
        id: 'd52fe3d5-142f-478b-93dc-09c41fff83b3',
        categoryId: '61a304dd-3733-4b6e-8e8b-3113a8541aec',
        label: 'от 20 ',
        isChecked: false
    },
]

export const oilTypes = [
    {
        id: '07bebcab-add1-474f-a588-f4a59e3d74ea',
        categoryId: '101d2d62-ddb6-4939-afe2-94decae4aaa3',
        label: 'Бензин',
        isChecked: false
    },
    {
        id: 'a39bd482-8022-45f4-818f-f6b364dc0698',
        categoryId: '101d2d62-ddb6-4939-afe2-94decae4aaa3',
        label: 'Дизел',
        isChecked: true
    },
    {
        id: '014877a8-c85e-41c9-9c43-d956b10570c7',
        categoryId: '101d2d62-ddb6-4939-afe2-94decae4aaa3',
        label: 'Газ',
        isChecked: false
    },
]

export const formulaWheels = [
    {
        id: 'b605c745-0cc3-4fde-bea6-e2f45e7bb6f0',
        categoryId: '415829e1-5e15-45c8-9dbb-1326ccdfdb4b',
        label: '4x2',
        image: '/images/wheels.png',
        isChecked: false
    },
    {
        id: '66473c5b-26e6-4598-a0f1-4104bd786b0f',
        categoryId: '415829e1-5e15-45c8-9dbb-1326ccdfdb4b',
        label: '4x4',
        image: '/images/wheels.png',
        isChecked: false
    },
    {
        id: 'a6bed394-8f9b-40b3-9926-ceb348a27fbe',
        categoryId: '415829e1-5e15-45c8-9dbb-1326ccdfdb4b',
        label: '6x4',
        image: '/images/wheels.png',
        isChecked: false
    },
]