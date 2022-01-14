<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use function sprintf;
class StoreResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
        'product_id' => $this->product_id,
        'product_name' => $this->product_name,
        'product_description' => $this->product_description,
        'price' => $this->price,
        'img' => $this->img,
        'type' => $this->type
        ];
    }
}
