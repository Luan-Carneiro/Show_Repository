const _getBtnSub = document.querySelector("button#button-search");

_getBtnSub.addEventListener("click", () => {
    const _getInputCustomerUser = document.querySelector("input#username-input");

    class app {
        constructor(userName) {
            this.repositories = [];

            axios.get(`https://api.github.com/users/${userName}/repos`)
                .then((response) => {
                    this.RequisitionAnswer = response;
                    this.CreateTable();
                })
                .catch(() => {
                    console.error("Erro na Requisição");
                });
        };

        CreateTable() {
            for (let listRepoOptions = 0; listRepoOptions < this.RequisitionAnswer.data.length; listRepoOptions++) {
                let { name, description, html_url } = this.RequisitionAnswer.data[listRepoOptions];

                this.repositories.push({
                    name, 
                    description, 
                    html_url,
                });
            };

            this.render();
        };

        render() {
            console.log(this.repositories);

            const _getTitleClass = document.querySelector("h3.title");
            const _getDescriptionClass = document.querySelector("p.description");
            const _getLinkClass = document.querySelector("a.link");

            const _getBarBox = document.querySelector("div.bar");

            _getTitleClass.innerHTML = this.repositories[0].name;
            _getDescriptionClass.innerHTML = this.repositories[0].description;
            _getLinkClass.setAttribute("href", this.repositories[0].html_url);

            _getBarBox.style.display = "block";

            // for (let listObjectProps = 0; listObjectProps < this.repositories.length; listObjectProps++) {
            //     // Fazer criar novas abas mostrando os repositorios
            // };

            console.log(`Total de Repositorios: ${this.repositories.length}`);
        };
    };

    new app(_getInputCustomerUser.value);
    _getInputCustomerUser.value = "";
});