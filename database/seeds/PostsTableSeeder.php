<?php

use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*factory(App\Post::class, 10)->create()->each(function ($user) {
            $user->posts()->save(factory(App\Post::class)->make());
        });*/

        factory(App\Post::class, 10)->create();
    }
}
