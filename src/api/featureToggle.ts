
export const fetchAll = () => {
    return fetch('http://localhost:8080/feature-toggles')
        .then((resp) => resp.json());
};

export const fetchById = (id: string) => {
    return fetch(`http://localhost:8080/feature-toggles/${id}`)
        .then((resp) => resp.json());
};
