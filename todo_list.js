let list = [];
        let date_list = [];

        function onkeydown1(event) {
            if (event.key === 'Enter') {
                adding();
            }
        }

        function output1() {
            var lines = document.querySelector('.output');
            // Clear the existing content
            lines.innerHTML = '';

            for (var i = 0; i < list.length; i++) {
                lines.innerHTML += `<span class="list_css">${list[i]}</span>` + `<span class="date_css">${date_list[i]}</span>` + `<button class="delete" onclick="delete_list(${i}); output1();">Delete</button><br>`;
            }
        }

        function adding() {
            const name = document.querySelector('.todo').value;
            const name1 = document.querySelector('.date_1').value;

            if (name !== '' && name1 !== '') {
                list.push(name);
                date_list.push(name1);
                document.querySelector('.todo').value = '';
                document.querySelector('.date_1').value = '';
                output1();
            }
        }

        function delete_list(i) {
            list.splice(i, 1);
            date_list.splice(i, 1);
            output1();
        }