<?php

namespace App\Http\Controllers;

use App\Items;
use Illuminate\Http\Request;

class ItemsController extends Controller
{
    public function addEvent(Request $request){
        $item = new Items();
        
        $item->details = $request->input('details');

        $item->save();

        return response()->json(['message'=>$item],201);
    }
    
    public function showAll(Request $request){
        $item = new Items();
        
    }
    
    public function deleteEvent(Request $request){
        $item = new Items();
        
    }

    public function editEvent(Request $request){
        $item = new Items();
        
    }
}
