const fs = require('fs');

// 1) შევქმნათ test.txt და ჩავწეროთ ტექსტი
fs.writeFile('test.txt', 'Hello FS Module', (err) => {
    if (err) throw err;
    console.log('test.txt შეიქმნა და ჩაიწერა ტექსტი');

    // 2) წავიკითხოთ ფაილი
    fs.readFile('test.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('ფაილის შიგთავსი:', data);

        // 3) დავამატოთ ტექსტი
        fs.appendFile('test.txt', ' - დამატებული ტექსტი', (err) => {
            if (err) throw err;
            console.log('ტექსტი დაემატა');

            // 4) შევქმნათ info.txt JSON-ით
            const info = {
                name: 'Giorgi',
                age: 25
            };

            fs.writeFile('info.txt', JSON.stringify(info), (err) => {
                if (err) throw err;
                console.log('info.txt შეიქმნა');

                // 5) წავიკითხოთ info.txt და გამოვიტანოთ მხოლოდ სახელი
                fs.readFile('info.txt', 'utf8', (err, data) => {
                    if (err) throw err;

                    const parsed = JSON.parse(data);
                    console.log('სახელი:', parsed.name);

                    // 6) გადავარქვათ სახელი
                    fs.rename('test.txt', 'newTest.txt', (err) => {
                        if (err) throw err;
                        console.log('ფაილს სახელი შეეცვალა');

                        // 7) წავშალოთ ფაილი
                        fs.unlink('newTest.txt', (err) => {
                            if (err) throw err;
                            console.log('ფაილი წაიშალა');
                        });
                    });
                });
            });
        });
    });
});