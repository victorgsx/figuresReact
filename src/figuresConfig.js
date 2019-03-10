export const FiguresConfig = [
    {
        id: 'circle',
        title: "Круг",
        fields: [
            {
                id: "radius",
                title: "Радиус",
            }
        ],
        getArea: (params) => Math.PI * Math.pow(params.radius, 2),
        getPerimeter: (params) => Math.PI * params.radius * 2,
    },
    {
        id: 'rectangle',
        title: "Прямоугольник",
        fields: [
            {
                id: "sideA",
                title: "Сторона А",
            },
            {
                id: "sideB",
                title: "Сторона B",
            }
        ],
        getArea: (params) => params.sideA * params.sideB,
        getPerimeter: (params) => (params.sideA + params.sideB) * 2,
    },
    {
        id: 'triangle',
        title: "Треугольник",
        fields: [
            {
                id: "sideA",
                title: "Сторона А",
            },
            {
                id: "sideB",
                title: "Сторона B",
            },
            {
                id: "sideC",
                title: "Сторона C",
            }
        ],
        getArea: (params) => {
            let p = (params.sideA + params.sideB + params.sideC) / 2;
            return Math.sqrt(p * (p - params.sideA) * (p - params.sideB) * (p - params.sideC));
        },
        getPerimeter: (params) => params.sideA + params.sideB + params.sideC,
    },
];