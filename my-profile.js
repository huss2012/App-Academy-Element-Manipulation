window.onload = () => {

    const ProfileHeader = document.createElement("h1");
    ProfileHeader.setAttribute("id", "main-header");
    ProfileHeader.setAttribute("class", "name");
    ProfileHeader.innerText = "Hussain Al-shaer";
    document.body.append(ProfileHeader);
    console.log("page was loaded successfully");
    /*===============Section===================*/
    // //1.Create a section:
    // const section = document.createElement("section");
    // //2.Create unoreder list:
    // const unorderedList = document.createElement("ul");
    // //3.Create list item:
    // //4.make the content of the list item the date:
    // //5.append the list item to the unordered list:
    // const listItem = document.createElement("li");
    // listItem.innerText = Date();
    // unorderedList.append(listItem);
    // //6.append the unordered list to the section:
    // section.append(unorderedList);
    // document.body.append(section);
    /*============Clock===================*/
    const timeDiv = document.createElement("div");

    const updateTime = () => {
        const now = new Date();
        timeDiv.textContent = now;
        return now;
    };

    updateTime();
    setInterval(updateTime, 1000);
    document.body.append(timeDiv);
    console.log(timeDiv.childNodes);
    /*==============function to create a section========= */
    let firstInfo, secondInfo, thiredInfo, fourthInfo, fifthInfo;
    const arrayOfIds = ["phone-number", "offical-website", "contact-email", "socail-media-links", "current-time"];
    const arrayOfContent = ["Work-Phone: +966-55-555-5555", "My-webSite: https://DomainantSoftware.com", "My-offical-email: :D@gmail.com", "My-Social-media-Channels: F,Y,I,X.", `${timeDiv.childNodes[0].nodeValue}`];
    const arrayOfListItems = [firstInfo, secondInfo, thiredInfo, fourthInfo, fifthInfo];


    const sectionFunction = (...params) => {
        console.log(params[0]);
        const section = document.createElement(`${params[0]}`);
        section.setAttribute("id", `${params[0]}`);

        const unorederList = document.createElement(`${params[1]}`);
        unorederList.setAttribute("id", `${params[0]}-${params[1]}`);
        unorederList.setAttribute("class", "my-details");
        arrayOfListItems.forEach((listItem, index) => {
            listItem = document.createElement("li");
            listItem.setAttribute("id", `${arrayOfIds[index]}`);
            listItem.setAttribute("class", "detail");
            listItem.textContent = `${arrayOfContent[index]}`;
            unorederList.append(listItem);
        });

        section.append(unorederList);
        document.body.append(section);
    }
    sectionFunction("section", "ul", "li", arrayOfIds, arrayOfContent, arrayOfListItems);

}
