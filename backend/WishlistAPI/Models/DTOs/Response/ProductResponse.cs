﻿using System.ComponentModel.DataAnnotations;
using WishlistAPI.Models.DataModels;

namespace WishlistAPI.Models.DTOs.Response
{
    [MetadataType(typeof(Product))]
    public class ProductResponse
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string Picture { get; set; } = string.Empty;
        public bool IsAvailable { get; set; } = true;
        public int? RatingId { get; set; }
        public int? CategoryId { get; set; }
    }
}
