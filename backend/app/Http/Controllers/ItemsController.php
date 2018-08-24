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
        return response()->json(['response'=>$item, 'msg'=>'Event successfully added.'],201);
    }
    
    public function showAll(){
        $items = Items::all();
        if($items){
            return response()->json(['response'=>$items, 'msg'=>'All data retrived.'],200);
        }else{
            return response()->json(['response'=>[], 'msg'=>'No events'],200);
        }
    }
    
    public function deleteEvent($id){
        $item = Items::find($id);
        if($item){
            $item->delete();
            return response()->json(['response'=>$item, 'msg'=>'Event has been deleted successfully.'],201);
        }else{
            return response()->json(['response'=>[], 'msg'=>'No event under this id.'],404);
        }
    }

    public function editEvent(Request $request, $id){
        $item = Items::find($id);
        if($item){
            $item->details = $request->input('details');
            $item->save();
            return response()->json(['response'=>$item, 'msg'=>'Event has been updated successfully.'],201);
        }else{
            return response()->json(['response'=>[], 'msg'=>'No event under this id.'],404);
        }
    }

    public function showEvent($id){
        $item = Items::find($id);
        if($item){
            return response()->json(['response'=>$item, 'msg'=>'Event has been retrived successfully.'],201);
        }else{
            return response()->json(['response'=>[], 'msg'=>'No event under this id.'],404);
        }
    }
}
