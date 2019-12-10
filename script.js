window.onload = () => {
    const nameSecElm = document.querySelector("#nameSection");
    let nameSecHTML = "";

    names.sort((a, b) => a.CN.localeCompare(b.CN));

    for (let name of names) {
        nameSecHTML +=
            `
    <div class="col s3">
            <span class="circle flag-icon flag-icon-squared flag-icon-${name.Country.toLowerCase()}"></span>
            <span class="name">${name.CN}</span>
        </div>
    `
    }

    nameSecElm.innerHTML = nameSecHTML;
}