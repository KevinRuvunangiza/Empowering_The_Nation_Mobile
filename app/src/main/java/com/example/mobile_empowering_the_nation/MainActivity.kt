package com.example.mobile_empowering_the_nation

import android.os.Bundle
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import com.example.mobile_empowering_the_nation.fragments.CourseFragment
import com.example.mobile_empowering_the_nation.fragments.HomeFragment
import com.google.android.material.bottomnavigation.BottomNavigationView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)

        // Initialize fragments
        val homeFrag = HomeFragment()
        val courseFrag = CourseFragment()

        // Set the default fragment to HomeFragment
        makeCurrentFragment(homeFrag)

        // Optionally, you can set up the BottomNavigationView here
        // and add a listener to switch between fragments
        // Example:
        val bottomNav = findViewById<BottomNavigationView>(R.id.bottomNavigationView)
        bottomNav.setOnNavigationItemSelectedListener { item ->
            when (item.itemId) {
                R.id.navigation_home -> {
                    makeCurrentFragment(homeFrag)
                    true
                }
                R.id.navigation_course -> {
                    makeCurrentFragment(courseFrag)
                    true
                }
                // Add more cases for other menu items if needed
                else -> false
            }
        }
    }

    private fun makeCurrentFragment(fragment:Fragment) {
        supportFragmentManager.beginTransaction().apply {
            replace(R.id.frame_container, fragment)
            commit()
        }
    }
}
