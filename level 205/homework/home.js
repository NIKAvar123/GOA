const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const PORT = 3003;
const DB_FILE = path.join(__dirname, 'db.json');

const initDB = () => {
    if (!fs.existsSync(DB_FILE)) {
        fs.writeFileSync(DB_FILE, JSON.stringify([]));
    }
};

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    // GET /todos
    if (req.method === 'GET' && req.url === '/todos') {
        fs.readFile(DB_FILE, 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                return res.end(JSON.stringify({
                    error: 'Failed to read database'
                }));
            }

            res.statusCode = 200;
            res.end(data);
        });
    }

    // GET /todos/:id
    else if (req.method === 'GET' && req.url.startsWith('/todos/')) {
        const id = Number(req.url.split('/')[2]);

        fs.readFile(DB_FILE, 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                return res.end(JSON.stringify({
                    error: 'Failed to read database'
                }));
            }

            const todos = JSON.parse(data);
            const todo = todos.find(item => item.id === id);

            if (!todo) {
                res.statusCode = 404;
                return res.end(JSON.stringify({
                    error: 'Todo not found'
                }));
            }

            res.statusCode = 200;
            res.end(JSON.stringify(todo));
        });
    }

    // POST /todos
    else if (req.method === 'POST' && req.url === '/todos') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const newTodo = JSON.parse(body);

                if (!newTodo.task) {
                    res.statusCode = 400;
                    return res.end(JSON.stringify({
                        error: 'Missing task'
                    }));
                }

                fs.readFile(DB_FILE, 'utf8', (err, data) => {
                    if (err) {
                        res.statusCode = 500;
                        return res.end(JSON.stringify({
                            error: 'Failed to read database'
                        }));
                    }

                    const todos = JSON.parse(data);

                    const item = {
                        id: Date.now(),
                        task: newTodo.task,
                        completed: false
                    };

                    todos.push(item);

                    fs.writeFile(
                        DB_FILE,
                        JSON.stringify(todos, null, 2),
                        (error) => {
                            if (error) {
                                res.statusCode = 500;
                                return res.end(JSON.stringify({
                                    error: 'Failed to write database'
                                }));
                            }

                            res.statusCode = 201;
                            res.end(JSON.stringify({
                                message: 'Todo added!',
                                data: item
                            }));
                        }
                    );
                });

            } catch (error) {
                res.statusCode = 400;
                res.end(JSON.stringify({
                    error: 'Invalid JSON payload'
                }));
            }
        });
    }

    // DELETE /todos/:id
    else if (req.method === 'DELETE' && req.url.startsWith('/todos/')) {
        const id = Number(req.url.split('/')[2]);

        fs.readFile(DB_FILE, 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                return res.end(JSON.stringify({
                    error: 'Failed to read database'
                }));
            }

            const todos = JSON.parse(data);

            const filteredTodos = todos.filter(todo => todo.id !== id);

            if (filteredTodos.length === todos.length) {
                res.statusCode = 404;
                return res.end(JSON.stringify({
                    error: 'Todo not found'
                }));
            }

            fs.writeFile(
                DB_FILE,
                JSON.stringify(filteredTodos, null, 2),
                (error) => {
                    if (error) {
                        res.statusCode = 500;
                        return res.end(JSON.stringify({
                            error: 'Failed to write database'
                        }));
                    }

                    res.statusCode = 200;
                    res.end(JSON.stringify({
                        message: 'Todo deleted successfully'
                    }));
                }
            );
        });
    }

    // Route not found
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({
            error: 'Route not found'
        }));
    }
});

initDB();

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});