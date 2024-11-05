import mysql from "mysql2/promise";

export async function GET(request, { params }) {
  const {id} = params;
  const userId = id;

  if (!userId) {
    return new Response(JSON.stringify({ error: "User ID is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Connect to the database
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "0220",
      database: "nextjs_backend",
    });

    // Execute the query to fetch data
    const [rows] = await connection.execute("SELECT * FROM users WHERE id = ?", [userId]);

    // Close the database connection
    await connection.end();

    // Check if user data is found
    if (rows.length === 0) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Return the data as a JSON response
    return new Response(JSON.stringify({ data: rows[0] }), {
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

export async function PUT(request) {
  const data = await request.json();

  // Ensure id is provided
  if (!data.id) {
    return new Response(JSON.stringify({ error: "User ID is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Replace undefined values with null
  const { name, email, number, password, id } = data;

  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "0220",
      database: "nextjs_backend",
    });

    await connection.execute(
      "UPDATE users SET name = ?, email = ?, number = ?, password = ? WHERE id = ?",
      [
        name !== undefined ? name : null, // Replace undefined with null
        email !== undefined ? email : null,
        number !== undefined ? number : null,
        password !== undefined ? password : null,
        id // Assuming id is always provided
      ]
    );

    await connection.end();

    return new Response(
      JSON.stringify({ message: "Data Updated Successfully!" }),
      {
        status: 200,
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
