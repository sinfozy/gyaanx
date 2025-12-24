// import { NextResponse } from "next/server";
// import { connectToDB } from "@/lib/db";
// import { User } from "@/models/User";

// export async function POST(req: Request) {
//   try {
//     const { email, password } = await req.json();
//     await connectToDB();

//     const user = await User.findOne({ email });

//     if (!user) {
//       return NextResponse.json({ message: "Account not registered." }, { status: 404 });
//     }

//     if (user.password !== password) {
//       return NextResponse.json({ message: "Incorrect password." }, { status: 401 });
//     }
    

//     return NextResponse.json({ 
//       success: true, 
//       name: user.name, 
//       email: user.email,
//       isProfileComplete: user.isProfileComplete // Added this check
//     });
//   } catch (error) {
//     return NextResponse.json({ message: "Internal Error" }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { User } from "@/models/User";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    await connectToDB();

    // 1. Find user in MongoDB
    const user = await User.findOne({ email });

    // 2. Requirement: "When non registered user try to login it should show user not registered"
    if (!user) {
      return NextResponse.json({ message: "User not registered with GyaanX." }, { status: 404 });
    }

    // 3. Password Check (Keep plain text per your code, but bcrypt is recommended later)
    if (user.password !== password) {
      return NextResponse.json({ message: "Incorrect password." }, { status: 401 });
    }

    // 4. Return ALL critical data for your Dashboard Logic
    return NextResponse.json({ 
      success: true, 
      name: user.name,          // Returned to show actual username on Dashboard
      email: user.email, 
      isProfileComplete: user.isProfileComplete || false,
      isPaid: user.isPaid || false // Persistent check for ₹199 subscription
    });

  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}