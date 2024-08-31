class Practice{

    constructor(){
        this.data = [];
    }

    async goFetch(urlToFetch){
        console.log('called');
        urlToFetch = 'data.json';
        const response = await fetch (urlToFetch)
        const data = await response.json();
        this.data = data; 
        console.log(this.data);
    }


    async printData() {
        await console.log(this.data);

        console.log(this.data);

        let data = this.data; 
        let bossDiv = document.createElement('div');
        let body = document.querySelector('body');
        body.appendChild(bossDiv);
    
        data.forEach(item => {
                let formattedText = `${item.name}, ${item.age}, ${item.job}`;
                let itemDiv = document.createElement('div');
                itemDiv.textContent = formattedText;
                bossDiv.appendChild(itemDiv);
        });
    }
}

// dit async! dit is belangrijk! 
(async () => {
const practiceInitialisation = new Practice();

await practiceInitialisation.goFetch();
practiceInitialisation.printData();
})();
