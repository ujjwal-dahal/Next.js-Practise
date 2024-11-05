import mysql from "mysql2/promise";

export async function GET(request) {
  try {
    // Connect to the database
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "0220",
      database: "nextjs_backend",
    });

    // Execute the query to fetch data
    const [rows] = await connection.execute("SELECT * FROM users");

    // Close the database connection
    await connection.end();

    // Return the data as a JSON response
    return new Response(JSON.stringify({ data: rows }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Return an error response if there's an issue with the database operation
    return new Response(JSON.stringify({ error: "Database error", details: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request) {
  const data = await request.json();

  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "0220",
      database: "nextjs_backend",
    });

    await connection.execute(
      "INSERT INTO users (name, email, number, password) VALUES (?, ?, ?, ?)",
      [data.name, data.email, data.number, data.password]
    );

    await connection.end(); // Close the connection

    return new Response(
      JSON.stringify({ message: "Data Created Successfully!", data }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Database error", details: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}


export async function DELETE(request){
  let data = await request.json();
  try{
    const connection = await mysql.createConnection({
      host : "localhost",
      user : "root",
      password : "0220",
      database : "nextjs_backend"
    })

    await connection.execute("DELETE FROM users WHERE id = ?",[data.id]);

    await connection.end();

    return new Response(JSON.stringify({message : "Data Deleted Successfully"}))
  }
  catch(error){
    return new Response(JSON.stringify({message : error.message}))
  }

}