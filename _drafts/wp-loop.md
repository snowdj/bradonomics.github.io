---
layout: post
title: WP Loop
headline:
sub-heading:
description:
category: geekery #needs to be lowercase
category-url: geekery
featured-image:
og-image:
permalink:
---

How to loop through custom post types and only display custom taxonomies.

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