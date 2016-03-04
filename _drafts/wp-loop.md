---
layout: post
title: How To Display a Single Category for a Custom Post Type
headline:
sub-heading:
description:
category: geekery #needs to be lowercase
category-url: geekery
featured-image:
og-image:
---

You want to display only one category of a custom post type? I needed to do this for a recent project and had to piece together how to do it from a handful of articles. I thought a single article might serve you better.

The below example is a job board with a custom taxonomy for role type. In this case there are two types of jobs: Executive and Management. First we'll create the custom post type, then the custom taxonomy, and finally write a loop to display only one type of the taxonomies.

## Creating the Custom Post Type

There is a great site called [GenerateWP](https://generatewp.com/) that will make creating [custom post types](https://generatewp.com/post-type/), [custom taxonomies](https://generatewp.com/taxonomy/), [custom loops](https://generatewp.com/wp_query/), or a dozen other things. But here's how I created my custom "jobs" post type:

```php
//* Add Jobs Post Type
add_action( 'init', 'register_jobs_post_type' );
function register_jobs_post_type() {
  register_post_type( 'jobs', array(
      'labels' => array(
        'name' => 'Jobs',
        'singular_name' => 'Job',
      ),
      'supports' => array(
        'title',
        'editor',
        'genesis-seo', // Adds SEO Settings for Genesis Framework
        'genesis-layouts', // Adds Layout Settings for Genesis Framework
        'genesis-cpt-archives-settings', // Adds Taxonomies for Genesis Framework
      ),
      'public' => true,
      'has_archive' => true,
      'show_in_menu' => true,
      'exclude_from_search' => false,
      'rewrite' => array( 'slug' => 'job' ),
      'query_var' => true,
      'menu_position' => 6,
      'menu_icon' => 'dashicons-clipboard',
    )
  );
}
```

Now that you have the code, you could place it in your functions.php file, but in an effort to keep that file short I create a directory in my child theme files called "inc," (short for includes). Inside that directory I'll add a file called custom-post-types.php. Then I'll call the file in the functions.php file like this:

```php
//* Include Custom Post Types
include_once( get_stylesheet_directory() . '/inc/custom-post-types.php' );
```

## Creating the Custom Taxonomy

```php
//* Add Role Taxonomy for Jobs Post Type
add_action( 'init', 'rsi_job_role_type_taxonomy', 0 );
function rsi_job_role_type_taxonomy() {
  register_taxonomy( 'job_role', 'jobs', array(
      'labels' => array(
        'name' => _x( 'Role Type', 'taxonomy general name' ),
        'singular_name' => _x( 'Role Type', 'taxonomy singular name' ),
        'search_items' => __( 'Search Role Types' ),
        'all_items' => __( 'All Role Types' ),
        'parent_item' => __( 'Parent Role Type' ),
        'parent_item_colon' => __( 'Parent Role Type:' ),
        'update_item' => __( 'Update Role Type' ),
        'edit_item' => __( 'Edit Role Type' ),
        'add_new_item' => __( 'Add New Role Type' ),
        'new_item_name' => __( 'New Role Type' ),
        'menu_name' => __( 'Role Types' ),
      ),
      'rewrite' => array(
        'slug' => 'role-type'
      ),
      'hierarchical' => true,
    )
  );
}
```

## Loop Trough Single Taxonomy of a Custom Post Type

```php
// The Query
$exec_query = new WP_Query( array (
  'post_type' => 'jobs',
  'job_role'  => 'executive',
  'posts_per_page' => 4
) );

// The Loop
if ( $exec_query->have_posts() ) { ?>

      <h3 class="title">Executive</h3>

      <ul> <?php

    while ( $exec_query->have_posts() ): $exec_query->the_post(); ?>

        <li>
          <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </li> <?php

    endwhile; ?>

      </ul> <?php

    // Restore original Post Data
    wp_reset_postdata();

}
```