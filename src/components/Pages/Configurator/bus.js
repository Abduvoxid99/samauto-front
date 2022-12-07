const busSteps = [
    {
        id: '14185280-6537-4076-8b04-e659e8dd7ab1',
        title: 'Назначение',
        multiply: true,
    },
    {
        id: '0ceebf64-d09a-4199-87c2-6b30469ca916',
        title: 'По длине/пассажировместимости',
        multiply: true,
    },
    {
        id: 'f0f8fd8e-9aff-49b3-9d2b-abf19cf1a028',
        title: 'Тип топлива',
        multiply: true,
    }
]

const firstStep = [
    {
        id: '52ff465a-8520-4c02-8bb7-699a26fc1ea1',
        categoryId: '14185280-6537-4076-8b04-e659e8dd7ab1',
        label: 'Городской',
        image: '/images/bus/1step/1.png',
        isChecked: false
    },
    {
        id: '34168f62-1d5d-4d78-8f97-d17fea4c43ad',
        categoryId: '14185280-6537-4076-8b04-e659e8dd7ab1',
        label: 'Междугородные',
        image: '/images/bus/1step/2.png',
        isChecked: false
    },
    {
        id: 'c6be3c75-a0a6-451e-b9f8-fb20e0da532e',
        categoryId: '14185280-6537-4076-8b04-e659e8dd7ab1',
        label: 'Пригородные',
        image: '/images/bus/1step/3.png',
        isChecked: false
    },
    {
        id: 'dfbbb0d0-a278-4d85-b11f-ab42da34bfb9',
        categoryId: '14185280-6537-4076-8b04-e659e8dd7ab1',
        label: 'Туристические',
        image: '/images/bus/1step/4.png',
        isChecked: false
    },
]

const secondStep = [
    {
        id: '2c5f0b90-1cc3-410b-9e65-cb49528b43aa',
        categoryId: '0ceebf64-d09a-4199-87c2-6b30469ca916',
        label: 'Малого класса м/15-45 чел.',
        isChecked: false
    },
    {
        id: 'e1567acd-cc7f-41ac-b324-794ede6aa1cf',
        categoryId: '0ceebf64-d09a-4199-87c2-6b30469ca916',
        label: 'Среднего класса  м/46-80 чел.',
        isChecked: false
    },
    {
        id: '7afb1f16-18c0-4681-8bde-d4b9e76a099a',
        categoryId: '0ceebf64-d09a-4199-87c2-6b30469ca916',
        label: 'Большого класса м/81-115 чел.',
        isChecked: false
    },
    {
        id: 'c802fb86-c0d1-4708-ba20-498a7a27faeb',
        categoryId: '0ceebf64-d09a-4199-87c2-6b30469ca916',
        label: 'Особо большого  м/116 чел.',
        isChecked: false
    },
]

const thirdStep = [
    {
        id: '82b7349c-c9fb-46b2-8abf-488046a545ec',
        categoryId: 'f0f8fd8e-9aff-49b3-9d2b-abf19cf1a028',
        label: 'Дизел',
        isChecked: false
    },
    {
        id: '2ce38843-5e16-4a3f-b201-f8ee02a78cae',
        categoryId: 'f0f8fd8e-9aff-49b3-9d2b-abf19cf1a028',
        label: 'Газ',
        isChecked: false
    },
]

export default busSteps